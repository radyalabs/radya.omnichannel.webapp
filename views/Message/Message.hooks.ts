import { useEffect, useState } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';
import { createQueryParams } from '@/utils';

import type {
  ConversationList,
  ConversationQueryParams,
} from './Mesages.types';
import { CONVERSATION_INITIAL_QUERY_PARAMS } from './Message.constants';
import { indexConversationToStatus } from './Message.helpers';

const useMessage = () => {
  const [
    conversationQueryParams,
    setConversationQueryParams,
  ] = useState<ConversationQueryParams>(CONVERSATION_INITIAL_QUERY_PARAMS);
  const [
    conversationData,
    setConversationData,
  ] = useState<ConversationList>();
  const [unresolvedChat, setUnresolvedChat] = useState<number>(0);

  const [
    selectedConversationId,
    setSelectedConversationId,
  ] = useState<string>('');

  const { data: conversationRes } = useGetData<ConversationList>(
    ['conversation', createQueryParams(conversationQueryParams)],
    ENDPOINT.MESSAGE.CONVERSATION,
    {
      params: conversationQueryParams,
      normalizer: (data) => data,
    },
  );

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
  };

  const handleSwitchTab = (tabIndex: number) => {
    const statusText = indexConversationToStatus(tabIndex);
    setConversationData(undefined);
    setConversationQueryParams((prev) => ({ ...prev, status: statusText }));
    setSelectedConversationId('');
  };

  const handleSearchSubmit = (searchInput: string | null) => {
    setConversationQueryParams((prev) => ({ ...prev, fullname: searchInput }));
    setSelectedConversationId('');
  };

  useEffect(() => {
    if (conversationRes) {
      const { items } = conversationRes;
      setUnresolvedChat(items.filter((item) => item.status.toLowerCase() === 'unserved').length);
      setConversationData(conversationRes);
    }
  }, [conversationRes]);

  return {
    conversationData,
    handleSelectConversation,
    selectedConversationId,
    handleSwitchTab,
    unresolvedChat,
    handleSearchSubmit,
  };
};

export default useMessage;
