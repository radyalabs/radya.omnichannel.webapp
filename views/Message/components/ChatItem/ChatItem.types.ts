interface ChatItemProps {
  /**
   * Variant of ChatItem
   */
  variant?: 'served' | 'resolved' | 'unserved';
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
