import type { PaginationData } from '@/types/responses';
import type { ConversationResponse } from '@/views/Message/Mesages.types';

export interface ChatListPanelProps {
  listConversation?: PaginationData<ConversationResponse>;
  onSelectConversation: (conversationId: string) => void;
  onSwitchTab: (tabIndex: number) => void;
}
