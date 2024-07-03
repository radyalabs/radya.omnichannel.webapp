import {
  InboxOutlined, InfoOutlined,
  InsertPhotoOutlined,
  PendingOutlined,
  SendOutlined,
  TextSnippetOutlined,
} from '@mui/icons-material';
import { format } from 'date-fns';

import Button from '@/components/base/Button';
import Textarea from '@/components/base/Textarea';
import Typography from '@/components/base/Typography';
import Avatar from '@/components/ui/Avatar';
import ChatBubble from '@/views/Message/components/ChatBubble/ChatBubble';
import ChatEmpty from '@/views/Message/components/ChatEmpty/ChatEmpty';
import useChatRoom from '@/views/Message/components/ChatRoom/ChatRoom.hooks';
import type {
  ChatRoomProps,
} from '@/views/Message/components/ChatRoom/ChatRoom.types';

const ChatRoom = (props: ChatRoomProps) => {
  const {
    messages = [],
    name = '',
    isChatbot = false,
    status = '',
    date = '',
    inputMessage,
    handleInputMessage,
    handleSendMessage,
    isSendingMessage,
  } = useChatRoom(props);

  return (
    <div>
      {
        messages && (
          <div>
            {
              messages.length
                ? (
                  <div className="flex flex-col h-[calc(100vh-5rem)]">
                    {/* Chat Room Head */}
                    <div className="flex px-6 py-4 justify-between border-b border-0 border-solid border-n-5">
                      <div className="flex gap-3.5 justify-center items-center">
                        <Avatar label="Hasbi Ashshidiq" height={44} width={44} />
                        <Typography variant="title" size="small" className="text-n-10">
                          {name}
                        </Typography>
                      </div>
                      <div className="flex gap-5 justify-center items-center">
                        <div className="flex">
                          <Typography variant="body" size="large" className="text-n-10">{isChatbot && 'Chatbot'}</Typography>
                        </div>
                        <div className="flex gap-4 justify-center items-center">
                          {status.toLowerCase() === 'unserved' && <Button color="primary">Resolve</Button>}
                          <Button variant="text" color="primary" className="p-0">
                            <PendingOutlined />
                          </Button>
                          <Button variant="text" color="primary" className="p-0">
                            <InfoOutlined />
                          </Button>
                        </div>
                      </div>
                    </div>

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

                            <ChatBubble
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
                )
                : <ChatEmpty />
            }
          </div>
        )
      }
    </div>
  );
};

export default ChatRoom;
