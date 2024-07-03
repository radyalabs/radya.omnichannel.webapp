import {
  InboxOutlined,
  InsertPhotoOutlined,
  SendOutlined,
  TextSnippetOutlined,
} from '@mui/icons-material';
import { format } from 'date-fns';

import Button from '@/components/base/Button';
import Textarea from '@/components/base/Textarea';
import Typography from '@/components/base/Typography';

import ChatBubbleCustomer from '../ChatBubbleCustomer/ChatBubbleCustomer';

import useChatRoomCustomer from './ChatRoomCustomer.hooks';
import type { ChatRoomCustomerProps } from './ChatRoomCustomer.types';

const ChatRoomCustomer = (props: ChatRoomCustomerProps) => {
  const {
    messages = [],
    date = '',
    inputMessage,
    handleInputMessage,
    handleSendMessage,
    isSendingMessage,
  } = useChatRoomCustomer(props);

  return (
    <div>
      <div className="flex flex-col h-[calc(100vh-5rem)]">
        {/*  Chat Room Content */}
        <div className="flex flex-col pt-8 mx-6 pb-7 grow overflow-y-scroll">
          {/*  User Bubble */}
          {
            messages.map((message, indexMessage) => (
              <div key={message.messageId}>
                {/* Date */}
                {indexMessage === 0 && (
                  <div className="flex w-full justify-center">
                    <div className=" bg-chatRoom-date py-1 px-8 rounded-full">
                      <Typography
                        variant="body"
                        size="medium"
                        className="text-n-8 font-semibold"
                      >
                        {format(new Date(date), 'dd LLLL yyyy')}
                      </Typography>
                    </div>
                  </div>
                )}

                <ChatBubbleCustomer
                  name={message.fullname}
                  message={message.content}
                  type={message.role === 'Customer' ? 'sender' : 'receiver'}
                  timestamp={format(new Date(message.createdAt), 'HH:mm')}
                />
              </div>
            ))
          }
        </div>

        <div className="px-7 pb-8 pt-5">
          <div
            className="flex flex-col justify-between border-[1.5px] border-solid border-[#989EA9] rounded-2xl max-h-40 pb-2.5"
          >
            <Textarea
              placeholder="Send a message"
              className="mt-0 border-0 outline-0 "
              classes={{
                input: 'border-0 outline-0 w-full max-h-16 resize-none',
                container: ' my-1 h-12 w-full',
              }}
              value={inputMessage}
              onChange={handleInputMessage}
              block
            />
            <div className="flex items-center justify-between px-4">
              <div className="flex gap-2.5">
                <Button variant="text" color="primary" className="p-0" disabled={isSendingMessage}>
                  <TextSnippetOutlined />
                </Button>
                <Button variant="text" color="primary" className="p-0" disabled={isSendingMessage}>
                  <InsertPhotoOutlined />
                </Button>
                <Button variant="text" color="primary" className="p-0" disabled={isSendingMessage}>
                  <InboxOutlined />
                </Button>
              </div>
              <Button
                size="small"
                color="primary"
                endIcon={<SendOutlined />}
                onClick={handleSendMessage}
                disabled={isSendingMessage}
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomCustomer;
