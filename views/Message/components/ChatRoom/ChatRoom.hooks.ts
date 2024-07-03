import {
  type ChangeEvent, useCallback, useEffect, useState,
} from 'react';

import type { HubConnection } from '@microsoft/signalr';
import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { ENDPOINT } from '@/constants/apiURL';
import { useModalContext } from '@/contexts/ModalContext';
import useGetData from '@/hooks/useGetData';
import { usePatchData } from '@/hooks/useMutateData';
import useToaster from '@/hooks/useToaster';
import type {
  ConversationItemMessages,
  ConversationMessageResponse,
} from '@/views/Message/Mesages.types';

import type {
  ChatMessage,
  ChatRoomProps,
} from './ChatRoom.types';

const useChatRoom = ({ conversationId }: ChatRoomProps) => {
  const [
    conversationMessage,
    setConversationMessage,
  ] = useState<ConversationMessageResponse>();
  const toaster = useToaster();
  const modal = useModalContext();

  const [inputMessageType] = useState<number>(0);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [connection, setConnection] = useState<HubConnection>();
  const [conversationIdR, setConversationIdR] = useState<string>('');
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [resolveInput, setResolveInput] = useState<string>('');
  const [resolveStatus, setResolveStatus] = useState<string>('');

  const { data: conversationMessageRes } = useGetData<ConversationMessageResponse>(
    ['conversation', conversationId],
    ENDPOINT.MESSAGE.CONVERSATION_MESSAGE(conversationId),
    {
      options: {
        enabled: !!conversationId,
      },
    },
  );

  const { conversation } = conversationMessage || {};
  const {
    messages,
    name,
    status = '',
    isChatbot,
    date = '',
    userId = '',
  } = conversation || {};

  const handleInputMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value } = target;

    setInputMessage(value);
  };

  const handleSendMessage = async () => {
    setIsSendingMessage(true);
    const messagePayload: ChatMessage = {
      conversationId: conversationIdR,
      userId,
      content: inputMessage,
      messageType: inputMessageType,
      fileUrl: '',
    };

    if (connection) {
      connection
        .invoke('SendMessage', conversationIdR, messagePayload)
        .then(() => {
          setInputMessage('');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error({ error });
        })
        .finally(() => {
          setIsSendingMessage(false);
        });
    }
  };

  const updateConversation = useCallback((message: ConversationItemMessages) => {
    const { messageId } = message;
    if (!(messages || []).find((m) => m.messageId === messageId)) {
      (messages || []).push(message);
    }
  }, [messages]);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onChangeResolveInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value } = target;
    setResolveInput(value);
  };

  const {
    mutate: mutateUpdateStatus,
    isLoading: loadingUpdateStatus,
  } = usePatchData(
    ['postResolve'],
    ENDPOINT.MESSAGE.UPDATE_STATUS_CONVERSATION(conversationId, resolveStatus),
    {
      options: {
        onSuccess: async () => {
          modal.success({
            content: 'Converation was resolved successfully',
            onConfirm: () => modal.closeConfirm(),
          });
          setShowModal(false);

          if (connection) {
            await connection.invoke('GetConversation');
          }
        },
      },
    },
  );

  const submitResolve = () => {
    let nextStatus = '';
    const lowerCaseStatus = status.toLowerCase();

    if (lowerCaseStatus === 'unserved') {
      nextStatus = 'Served';
    }

    if (lowerCaseStatus === 'served') {
      nextStatus = 'Resolved';
    }

    setResolveStatus(nextStatus);
    mutateUpdateStatus({});
  };

  useEffect(() => {
    async function start() {
      try {
        const conn = new HubConnectionBuilder()
          .withUrl(ENDPOINT.MESSAGE.CHAT_HUB(userId), {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
          })
          .configureLogging(LogLevel.Information)
          .build();
        setConnection(conn);

        await conn.start();
      } catch (error) {
        toaster.error('Unable to connect with conversation');
        // eslint-disable-next-line no-console
        console.error({ error });
      }
    }

    start();
  }, [toaster, userId]);

  useEffect(() => {
    if (connection) {
      connection.on('GetConversation', (conversationRes) => {
        setConversationIdR(conversationRes);
      });

      connection.on('SendMessage', (msg) => {
        updateConversation(msg);
      });

      connection.on('ReceiveMessage', (msg) => {
        updateConversation(msg);
      });
    }
  }, [connection, updateConversation]);

  useEffect(() => {
    if (conversationMessageRes) {
      setConversationMessage(conversationMessageRes);
    }
  }, [conversationMessageRes, setConversationMessage]);

  return {
    messages,
    name,
    isChatbot,
    status,
    date,
    inputMessage,
    handleInputMessage,
    handleSendMessage,
    isSendingMessage,
    toggleModal,
    showModal,
    resolveInput,
    onChangeResolveInput,
    submitResolve,
    loadingUpdateStatus,
  };
};

export default useChatRoom;
