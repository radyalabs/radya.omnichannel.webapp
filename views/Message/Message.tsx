'use client';

import Image from 'next/image';

import emptyChat from '@/assets/Chat bot-pana 1.svg';
import Typography from '@/components/base/Typography';
import ChatListPanel from '@/views/Message/components/ChatListPanel/ChatListPanel';

const Message = () => (
  <div className="flex bg-n-1 hide-overflow">
    <ChatListPanel />
    <div className="grow">
      <div className="flex flex-col items-center justify-center h-full">
        <Image src={emptyChat} alt="" />
        <Typography>Please select a conversation to start messaging</Typography>
      </div>
    </div>
  </div>
);

export default Message;
