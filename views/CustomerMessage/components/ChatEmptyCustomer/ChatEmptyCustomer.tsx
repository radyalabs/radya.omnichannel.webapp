'use client';

import Image from 'next/image';

import emptyChat from '@/assets/Chat bot-pana 1.svg';
import Typography from '@/components/base/Typography';

const ChatEmptyCustomer = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <Image src={emptyChat} alt="robot with phone in chat on background" />
    <Typography className="text-xl font-medium text-n-9">Please select a conversation to start messaging</Typography>
  </div>
);

export default ChatEmptyCustomer;
