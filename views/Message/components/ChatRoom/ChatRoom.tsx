import {
  InboxOutlined, InfoOutlined,
  InsertPhotoOutlined,
  PendingOutlined,
  SendOutlined,
  TextSnippetOutlined,
} from '@mui/icons-material';
import { Switch } from '@mui/material';
import { format } from 'date-fns';

import Button from '@/components/base/Button';
import Textarea from '@/components/base/Textarea';
import Typography from '@/components/base/Typography';
import Avatar from '@/components/ui/Avatar';
import Modal from '@/components/ui/Modal';

import ChatBubble from '../ChatBubble/ChatBubble';
import ChatEmpty from '../ChatEmpty/ChatEmpty';

import useChatRoom from './ChatRoom.hooks';
import type { ChatRoomProps } from './ChatRoom.types';

const ChatRoom = (props: ChatRoomProps) => {
  const {
    messages = [],
    name = '',
    status = '',
    date = '',
    inputMessage,
    handleInputMessage,
    handleSendMessage,
    isSendingMessage,
    toggleModal,
    showModal,
    resolveInput,
    onChangeResolveInput,
    submitResolve,
    loadingUpdateStatus,
    inputIsChatbot,
    onInputIsChatbotChange,
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
                        <Avatar label={name} height={44} width={44} />
                        <Typography variant="title" size="small" className="text-n-10">
                          {name}
                        </Typography>
                      </div>
                      <div className="flex gap-5 justify-center items-center">
                        <div className="flex items-center gap-1">
                          <Typography variant="body" size="large" className="text-n-10">Chatbot</Typography>
                          <Switch checked={inputIsChatbot} onChange={onInputIsChatbotChange} />
                        </div>
                        <div className="flex gap-4 justify-center items-center">
                          {status.toLowerCase() !== 'resolved' && <Button color="primary" onClick={toggleModal}>Resolve</Button>}
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
                              currentConversationName={name}
                              name={message.fullname}
                              message={message.content}
                              type={message.role === 'Customer' ? 'receiver' : 'sender'}
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

      <Modal open={showModal} title="Mark As Resolved" width={620}>
        <Modal.Content className="flex flex-col gap-5">
          <Typography variant="body">
            You can add conversation notes in this session in the form of
            chat summaries with customers, chat, context as a reference, etc.
          </Typography>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Avatar label={name} height={44} width={44} />
              <Typography variant="title">
                {name}
              </Typography>
            </div>
            <Textarea
              block
              value={resolveInput}
              placeholder="Send a message ..."
              onChange={onChangeResolveInput}
              disabled={loadingUpdateStatus}
            />
          </div>
        </Modal.Content>
        <Modal.Footer className="gap-1">
          <Button color="primary" variant="outline" onClick={toggleModal} disabled={loadingUpdateStatus}>Cancel</Button>
          <Button color="primary" onClick={submitResolve} disabled={loadingUpdateStatus}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChatRoom;
