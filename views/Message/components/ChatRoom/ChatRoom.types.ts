import type { ConversationItemMessages } from '@/views/Message/Mesages.types';

export interface ChatRoomProps {
  conversationId: string;
  handleMessageSession: (message: ConversationItemMessages) => void;
}

export interface ChatMessage {
  conversationId: string;
  userId: string;
  content: string;
  messageType: number;
  fileUrl: string;
}
