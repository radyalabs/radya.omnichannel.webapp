import {
  InboxOutlined, InfoOutlined,
  InsertPhotoOutlined,
  PendingOutlined,
  SendOutlined,
  TextSnippetOutlined,
} from '@mui/icons-material';

import Button from '@/components/base/Button';
import Textarea from '@/components/base/Textarea';
import Typography from '@/components/base/Typography';
import Avatar from '@/components/ui/Avatar';
import ChatBubble from '@/views/Message/components/ChatBubble/ChatBubble';

const ChatRoom = () => (
  <div className="flex flex-col h-[calc(100vh-5rem)]">
    {/* Chat Room Head */}
    <div className="flex px-6 py-4 justify-between border-b border-0 border-solid border-n-5">
      <div className="flex gap-3.5 justify-center items-center">
        <Avatar label="Hasbi Ashshidiq" height={44} width={44} />
        <Typography variant="title" size="small" className="text-n-10">Hasbi Ashshidiq</Typography>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="flex">
          <Typography variant="body" size="large" className="text-n-10">Chatbot</Typography>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Button color="primary">Resolve</Button>
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
      {/* Date */}
      <div className="flex w-full justify-center">
        <div className=" bg-chatRoom-date py-1 px-8 rounded-full">
          <Typography variant="body" size="medium" className="text-n-8 font-semibold">Today, 20 Mar 2024</Typography>
        </div>
      </div>
      {/*  User Bubble */}
      <ChatBubble name="Hasbi Ashshidiq" message="Hai admin ingin bertanya terkait dengan fitur" type="receiver" timestamp="14:50" />
      <ChatBubble name="Hasbi Ashshidiq" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, iste!" type="sender" timestamp="14:51" />
      <ChatBubble name="Hasbi Ashshidiq" message=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequatur deleniti" type="receiver" timestamp="14:52" />
    </div>

    <div className="px-7 pb-8 pt-5">
      <div className="flex flex-col justify-between border-[1.5px] border-solid border-[#989EA9] rounded-2xl max-h-40 pb-2.5">
        <Textarea placeholder="Send a message" className="mt-0 border-0 outline-0 " classes={{ input: 'border-0 outline-0 w-full max-h-16 resize-none', container: ' my-1 h-12 w-full' }} block />
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-2.5">
            <Button variant="text" color="primary" className="p-0">
              <TextSnippetOutlined />
            </Button>
            <Button variant="text" color="primary" className="p-0">
              <InsertPhotoOutlined />
            </Button>
            <Button variant="text" color="primary" className="p-0">
              <InboxOutlined />
            </Button>
          </div>
          <Button size="small" color="primary" endIcon={<SendOutlined />}>Reply  </Button>
        </div>
      </div>
    </div>
  </div>
);

export default ChatRoom;
