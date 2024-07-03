export interface ChatRoomCustomerProps {
  userId: string;
}

export interface ChatMessage {
  conversationId: string;
  userId: string;
  content: string;
  messageType: number;
  fileUrl: string;
}
