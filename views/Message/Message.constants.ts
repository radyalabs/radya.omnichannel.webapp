import type { ConversationQueryParams } from '@/views/Message/Mesages.types';

// eslint-disable-next-line import/prefer-default-export
export const CONVERSATION_INITIAL_QUERY_PARAMS: ConversationQueryParams = {
  status: '',
  fullname: '',
  page: 1,
  size: null,
  orderBy: '',
  orderType: '',
};
