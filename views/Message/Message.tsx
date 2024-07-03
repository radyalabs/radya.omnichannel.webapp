'use client';

import ChatListPanel from './components/ChatListPanel/ChatListPanel';
import ChatRoom from './components/ChatRoom/ChatRoom';
import useMessage from './Message.hooks';

const Message = () => {
  const {
    conversationData,
    handleSelectConversation,
    selectedConversationId,
    handleSwitchTab,
    unresolvedChat,
    handleSearchSubmit,
  } = useMessage();

  return (
    <div className="flex bg-n-1 hide-overflow">
      <ChatListPanel
        listConversation={conversationData}
        onSelectConversation={handleSelectConversation}
        onSwitchTab={handleSwitchTab}
        unresolvedChat={unresolvedChat}
        handleSearchSubmit={handleSearchSubmit}
      />

      <div className="grow">
        {
          selectedConversationId && <ChatRoom conversationId={selectedConversationId} />
        }
      </div>
    </div>
  );
};

export default Message;
