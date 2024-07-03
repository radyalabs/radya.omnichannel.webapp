import {
  useCallback, useEffect, useState,
} from 'react';

import type { HubConnection } from '@microsoft/signalr';
import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import type { ChangeEvent } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';
import useToaster from '@/hooks/useToaster';
import type {
  ConversationItemMessages,
  ConversationMessageResponse,
} from '@/views/Message/Mesages.types';

import type {
  ChatMessage,
  ChatRoomCustomerProps,
} from './ChatRoomCustomer.types';

const useChatRoomCustomer = ({ userId }: ChatRoomCustomerProps) => {
  const [
    conversationMessage,
    setConversationMessage,
  ] = useState<ConversationMessageResponse>();

  const toaster = useToaster();

  const { conversation } = conversationMessage || {};
  const {
    messages,
    date = '',
  } = conversation || {};

  const [inputMessageType] = useState<number>(0);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [connection, setConnection] = useState<HubConnection>();
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
  const [conversationId, setConversationId] = useState<string>('');

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
    setIsSendingMessage(true);
    const messagePayload: ChatMessage = {
      conversationId,
      userId,
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

  useEffect(() => {
    async function start() {
      try {
        if (userId) {
          const conn = new HubConnectionBuilder()
            .withUrl(ENDPOINT.MESSAGE.CHAT_HUB(userId), {
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
  }, [userId, toaster]);

  useEffect(() => {
    if (connection) {
      connection.on('GetConversation', (conversationIdR) => {
        setConversationId(conversationIdR);
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
    date,
    inputMessage,
    handleInputMessage,
    handleSendMessage,
    isSendingMessage,
  };
};

export default useChatRoomCustomer;
