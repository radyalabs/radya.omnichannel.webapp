import type { ConversationResponse, ConversationStatus } from './Mesages.types';

export const IndexConversationToStatus = (index: number): ConversationStatus => {
  let status = '';
  switch (index) {
    case 1:
      status = 'UnServed';
      break;
    case 2:
      status = 'Served';
      break;
    case 3:
      status = 'Resolved';
      break;
    default:
      status = '';
      break;
  }

  return status as ConversationStatus;
};

export const FilterConversationList = (
  conversationList: ConversationResponse[],
  typeConversation: number,
) => conversationList.filter(
  (conversation) => (
    typeConversation !== 0
      ? conversation.status
      === IndexConversationToStatus(typeConversation) : conversation
  ),
);
