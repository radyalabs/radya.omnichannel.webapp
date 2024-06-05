'use client';

import Image from 'next/image';

import emptyChat from '@/assets/Chat bot-pana 1.svg';
import Typography from '@/components/base/Typography';

const ChatEmpty = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <Image src={emptyChat} alt="" />
    <Typography>Please select a conversation to start messaging</Typography>
  </div>
);

export default ChatEmpty;
