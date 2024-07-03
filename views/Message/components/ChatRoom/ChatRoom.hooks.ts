import {
  useCallback, useEffect, useState,
} from 'react';

import type { HubConnection } from '@microsoft/signalr';
import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import type { ChangeEvent } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import { useAuthContext } from '@/contexts/AuthContext';
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

  const { profile } = useAuthContext();
  const toaster = useToaster();
  const modal = useModalContext();

  const { conversation } = conversationMessage || {};
  const {
    messages,
    name,
    status = '',
    isChatbot,
    date = '',
  } = conversation || {};

  const [inputMessageType] = useState<number>(0);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [connection, setConnection] = useState<HubConnection>();
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [resolveInput, setResolveInput] = useState<string>('');
  const [resolveStatus, setResolveStatus] = useState<string>('');
  const [inputIsChatbot, setInputIsChatbot] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const { data: conversationMessageRes } = useGetData<ConversationMessageResponse>(
    ['conversation', conversationId],
    ENDPOINT.MESSAGE.CONVERSATION_MESSAGE(conversationId),
    {
      options: {
        enabled: !!conversationId,
      },
    },
  );

  const handleInputMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value } = target;

    setInputMessage(value);
  };

  const handleSendMessage = async () => {
    const { userId: userIdAdmin = '' } = profile || {};
    setIsSendingMessage(true);
    const messagePayload: ChatMessage = {
      conversationId,
      userId: userIdAdmin,
      content: inputMessage,
      messageType: inputMessageType,
      fileUrl: '',
    };

    if (connection) {
      connection
        .invoke('SendMessage', conversationId, messagePayload)
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
    ['patchResolve', conversationId, resolveStatus],
    ENDPOINT.MESSAGE.UPDATE_STATUS_CONVERSATION(conversationId, resolveStatus),
    {
      options: {
        onSuccess: async () => {
          modal.success({
            content: 'Converation was resolved successfully',
            onConfirm: () => modal.closeConfirm(),
          });
          setShowModal(false);
        },
      },
    },
  );

  const {
    mutate: mutateUpdateBotStatus,
  } = usePatchData(
    ['patchStatusBot', String(inputIsChatbot)],
    ENDPOINT.MESSAGE.UPDATE_STATUS_BOT(conversationId, String(!inputIsChatbot)),
    {
      options: {
        onError: () => {
          setInputIsChatbot((prev) => !prev);
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

  const onInputIsChatbotChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { checked } = target;
    setInputIsChatbot(checked);
    mutateUpdateBotStatus({ });
  };

  const toggleShowDetail = () => {
    setShowDetail((prev) => !prev);
  };

  useEffect(() => {
    async function start() {
      try {
        const { userId: userIdSession } = profile || {};

        if (userIdSession) {
          const conn = new HubConnectionBuilder()
            .withUrl(ENDPOINT.MESSAGE.CHAT_HUB(userIdSession), {
              skipNegotiation: true,
              transport: HttpTransportType.WebSockets,
            })
            .configureLogging(LogLevel.Information)
            .build();
          setConnection(conn);

          await conn.start();
        }
      } catch (error) {
        toaster.error('Unable to connect with conversation');
        // eslint-disable-next-line no-console
        console.error({ error });
      }
    }

    start();
  }, [profile, toaster]);

  useEffect(() => {
    if (connection) {
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
      const { conversation: conversationRes } = conversationMessageRes;
      const { isChatbot: isChatbotRes } = conversationRes;
      setInputIsChatbot(isChatbotRes);
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
    inputIsChatbot,
    onInputIsChatbotChange,
    showDetail,
    toggleShowDetail,
  };
};

export default useChatRoom;
