'use client';

import { useState } from 'react';

import ChatEmpty from '@/views/Message/components/ChatEmpty/ChatEmpty';
import ChatListPanel from '@/views/Message/components/ChatListPanel/ChatListPanel';
import ChatRoom from '@/views/Message/components/ChatRoom/ChatRoom';

const Message = () => {
  const [chatView, setChatView] = useState<number>(0);

  return (
    <div className="flex bg-n-1 hide-overflow">
      <ChatListPanel setChatView={setChatView} />
      <div className="grow">
        {chatView === 0 && <ChatEmpty />}
        {chatView === 1 && <ChatRoom />}
      </div>
    </div>
  );
};

export default Message;
