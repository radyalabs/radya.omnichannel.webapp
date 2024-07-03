export interface ConversationResponse {
  conversationId: string
  userId: string
  name: string
  date: string
  status: string
  isChatbot: boolean
  lastMessage: string
}

export interface ConversationMessageResponse {
  conversation: ConversationItem
}

export interface ConversationItem {
  conversationId: string
  userId: string
  name: string
  date: string
  status: string
  isChatbot: boolean
  messages: ConversationItemMessages[]
}

export interface ConversationItemMessages {
  conversationId: string
  messageId: string
  content: string
  type: string
  fileUrl: string
  isRead: boolean
  fullname: string
  role: string
  createdAt: string
}

export type ConversationStatus = '' | 'UnServed' | 'Served' | 'Resolved';

export interface ConversationQueryParams {
  [key: string]: string | number | null;
  status: ConversationStatus;
  fullname: string | null;
  page: number;
  size: number | null;
  orderBy: string;
  orderType: string;
}
