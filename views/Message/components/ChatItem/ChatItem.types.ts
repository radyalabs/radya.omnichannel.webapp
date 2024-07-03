import type { ConversationStatus } from '@/views/Message/Mesages.types';

interface ChatItemProps {
  /**
   * Variant of ChatItem
   */
  variant?: ConversationStatus;
  /**
   * Name of user in ChatItem
   */
  name: string;
  /**
   * Chat Placeholder
   */
  placeholder: string;
  onClick: () => void;
}

export default ChatItemProps;
