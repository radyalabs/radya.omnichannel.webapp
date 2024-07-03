interface ChatBubbleProps {
  /**
   * bubble message
   */
  message: string
  /**
   * Name of user in bubble
   */
  name: string;
  type: 'sender' | 'receiver'
  timestamp: string;
  /**
   * Name retrieved from conversation list
   * to handle incorrect name from messages list
   * of user in bubble
   */
  currentConversationName: string;
}

export default ChatBubbleProps;
