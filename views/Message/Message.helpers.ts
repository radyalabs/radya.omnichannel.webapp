import type { ConversationStatus } from './Mesages.types';

// eslint-disable-next-line import/prefer-default-export
export const indexConversationToStatus = (index: number): ConversationStatus => {
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
