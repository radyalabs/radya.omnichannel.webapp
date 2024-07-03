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
}

export default ChatBubbleProps;
