import { useEffect, useState } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';
import type { ConversationMessageResponse } from '@/views/Message/Mesages.types';

const useChatRoom = (conversationId: string) => {
  const [
    conversationMessage,
    setConversationMessage,
  ] = useState<ConversationMessageResponse>();

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

  useEffect(() => {
    if (conversationMessageRes) {
      setConversationMessage(conversationMessageRes);
    }
  }, [conversationMessageRes]);

  return {
    messages,
    name,
    isChatbot,
    status,
    date,
  };
};

export default useChatRoom;
