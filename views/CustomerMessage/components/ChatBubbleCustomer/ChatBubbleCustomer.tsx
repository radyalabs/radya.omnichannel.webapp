'use client';

import Typography from '@/components/base/Typography';
import Avatar from '@/components/ui/Avatar';

import type ChatBubbleProps from './ChatBubbleCustomer.types';

const ChatBubbleCustomer = (props: ChatBubbleProps) => {
  const {
    message,
    name,
    type,
    timestamp,
  } = props;

  const isReceiver = type === 'receiver';
  const isSender = type === 'sender';

  return (
    <div className="flex w-full mt-3.5">
      {isSender && <div className="flex flex-1 items-center" />}
      <div className={`flex flex-1 ${isSender ? 'justify-end' : ''}`}>

        {isReceiver && (
          <div className="pt-5">
            <Avatar label={name} height={35} width={35} />
          </div>
        )}

        <div className={`flex flex-col ${isReceiver ? 'ml-4' : 'mr-4'}`}>
          <div className={`flex gap-2.5 ${isSender ? 'justify-start flex-row-reverse ' : ''}`}>
            <Typography variant="body" size="medium" className="text-n-10 font-semibold">
              {name}
            </Typography>
            <Typography variant="body" size="medium" className="text-n-8 font-medium">{timestamp}</Typography>
          </div>
          <div
            className={`relative flex ${isReceiver ? 'bg-chatRoom-user' : 'bg-chatRoom-admin'} px-4 py-2.5 rounded-xl mt-1 before:content-[''] before:absolute ${isReceiver ? 'before:left-[-8px]' : 'before:right-[-8px]'} before:w-0 after:h-0
          before:border-t-6 before:border-t-transparent before:border-solid
          before:border-b-6 before:border-b-transparent
          ${isReceiver ? 'before:border-r-8 before:border-r-chatRoom-user' : 'before:border-l-8 before:border-l-chatRoom-admin'}
          ${isReceiver ? 'before:border-l-0' : 'before:border-r-0'}
          before:border-l-0`}
          >
            <Typography size="medium" className="text-n-1">
              {message}
            </Typography>
          </div>
        </div>

        {isSender && (
          <div className="pt-5">
            <Avatar label={name} height={35} width={35} className="bg-n-3" />
          </div>
        )}
      </div>
      {isReceiver && (<div className="flex flex-1 justify-end" />)}
    </div>
  );
};

export default ChatBubbleCustomer;
