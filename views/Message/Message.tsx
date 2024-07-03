'use client';

import ChatListPanel from '@/views/Message/components/ChatListPanel/ChatListPanel';
import ChatRoom from '@/views/Message/components/ChatRoom/ChatRoom';
import useMessage from '@/views/Message/Message.hooks';

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
