import { type ChangeEvent, useEffect, useState } from 'react';

import type { HubConnection } from '@microsoft/signalr';

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
  const [connection] = useState<HubConnection>();
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
    messages, name, status = '', isChatbot, date = '',
  } = conversation || {};

  const handleInputMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value } = target;

    setInputMessage(value);
  };

  const handleSendMessage = async () => {
    const { userId = '' } = conversation || {};

    const messagePayload: ChatMessage = {
      conversationId,
      userId,
      content: inputMessage,
      messageType: inputMessageType,
      fileUrl: '',
    };

    if (connection) {
      connection
        .invoke('SendMessage', messagePayload)
        .then(() => {
          setInputMessage('');
        })
        .catch((error) => {
          console.error({ error });
        });
    }
  };

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
