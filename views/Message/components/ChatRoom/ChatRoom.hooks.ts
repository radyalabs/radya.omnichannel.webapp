import { type ChangeEvent, useEffect, useState } from 'react';

import type { HubConnection } from '@microsoft/signalr';
import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';
import type {
  ChatMessage,
  ChatRoomProps,
} from '@/views/Message/components/ChatRoom/ChatRoom.types';
import type { ConversationMessageResponse } from '@/views/Message/Mesages.types';

const useChatRoom = ({ conversationId }: ChatRoomProps) => {
  const [
    conversationMessage,
    setConversationMessage,
  ] = useState<ConversationMessageResponse>();

  const [inputMessageType] = useState<number>(0);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [connection, setConnection] = useState<HubConnection>();
  const [conversationIdR, setConversationIdR] = useState<string>('');
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
        });
    }
  };

  useEffect(() => {
    async function start() {
      try {
        const conn = new HubConnectionBuilder()
          // .withUrl(ENDPOINT.MESSAGE.CONVERSATION_MESSAGE(conversationId), {
          .withUrl(`https://api-omnichannel.radyalabs.id/chatHub?userId=${userId}`, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
          })
          .configureLogging(LogLevel.Information)
          .build();
        setConnection(conn);

        conn.on('GetConversation', (conversationRes) => {
          setConversationIdR(conversationRes);
        });

        // dua event bawah di push
        // filter based from conversationId
        conn.on('SendMessage', () => {});
        conn.on('ReceiveMessage', () => {});

        await conn.start();
        // await conn.invoke('GetConversation');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error({ error });
      }
    }

    start();
  }, [userId]);

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
  };
};

export default useChatRoom;
