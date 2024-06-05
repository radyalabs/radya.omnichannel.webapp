import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import { IcDot, IcInfo } from '@/components/icons';
import Avatar from '@/components/ui/Avatar';

const ChatRoom = () => (
  <div className="flex flex-col">
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
          <IcDot fill="none" width="24" height="24" viewBox="0 0 24 24" />
          <IcInfo fill="none" width="24" height="24" viewBox="0 0 24 24" />
        </div>
      </div>

    </div>
    {/*  Chat Room Content */}
    <div className="flex mt-8">
      <div className="flex w-full justify-center">
        <Typography variant="body" size="large" className="text-n-8 font-semibold">Today, 20 Mar 2024</Typography>
      </div>
    </div>
  </div>
);

export default ChatRoom;
