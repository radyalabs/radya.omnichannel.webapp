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
    <div className="flex flex-col mt-8 mx-6">
      {/* Date */}
      <div className="flex w-full justify-center">
        <div className=" bg-chatRoom-date py-1 px-8 rounded-full">
          <Typography variant="body" size="medium" className="text-n-8 font-semibold">Today, 20 Mar 2024</Typography>
        </div>
      </div>
      {/*  User Bubble */}
      <div className="flex w-full mt-3.5">
        <div className="flex flex-1">
          <div className="pt-5">
            <Avatar label="Hasbi Ashshidiq" height={35} width={35} />
          </div>
          <div className="flex flex-col ml-4">
            <div className="flex gap-2.5">
              <Typography variant="body" size="medium" className="text-n-10 font-semibold">Hasbi Ashshidiq</Typography>
              <Typography variant="body" size="medium" className="text-n-8 font-medium">14:50</Typography>
            </div>
            <div
              className="relative flex bg-chatRoom-user px-4 py-2.5 rounded-xl mt-1 before:content-[''] before:absolute before:left-[-8px] before:w-0 after:h-0
        before:border-t-[6px] before:border-t-transparent before:border-solid
        before:border-b-[6px] before:border-b-transparent
        before:border-r-[8px] before:border-r-chatRoom-user
        before:border-l-[0px]"
            >
              <Typography size="medium" className="text-n-1">
                Hai admin ingin bertanya terkait dengan fitur
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end" />
      </div>
      <div className="flex w-full mt-3.5">
        <div className="flex flex-1 items-center" />
        <div className="flex flex-1 justify-end">
          <div className="flex flex-col mr-4">
            <div className="flex gap-2.5 justify-end">
              <Typography variant="body" size="medium" className="text-n-8 font-medium">14:50</Typography>
              <Typography variant="body" size="medium" className="text-n-10 font-semibold">Admin</Typography>
            </div>
            <div
              className="relative flex bg-chatRoom-admin px-4 py-2.5 rounded-xl mt-1 before:content-[''] before:absolute before:right-[-8px] before:w-0 after:h-0
        before:border-t-[6px] before:border-t-transparent before:border-solid
        before:border-b-[6px] before:border-b-transparent
        before:border-l-[8px] before:border-l-chatRoom-admin
        before:border-r-[0px]"
            >
              <Typography size="medium" className="text-n-1">
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem cumque ducimus earum libero maiores nostrum obcaecati perspiciatis, quo similique? Ad adipisci amet autem beatae commodi cupiditate, delectus deserunt distinctio dolor dolore ea earum eius fugiat magnam molestias natus, nulla odit officia officiis placeat quo quos reiciendis repellat sint sit soluta, sunt tempore ut voluptates voluptatum. Accusantium animi autem commodi est illum iste nulla ratione tempore! Architecto at cum ducimus facilis nemo obcaecati quibusdam sit, unde? Dolorem, praesentium, repellat. Animi beatae deserunt, fugit inventore minima nostrum odit sapiente. Accusantium adipisci beatae ducimus quia sequi. Amet fugiat nisi sunt suscipit. Nesciunt?
              </Typography>
            </div>
          </div>
          <div className="pt-5">
            <Avatar label="Hasbi Ashshidiq" height={35} width={35} className="bg-n-3" />
          </div>
        </div>
      </div>
      <div className="flex w-full mt-3.5">
        <div className="flex flex-1 ">
          <div className="pt-5">
            <Avatar label="Hasbi Ashshidiq" height={35} width={35} />
          </div>
          <div className="flex flex-col ml-4">
            <div className="flex gap-2.5">
              <Typography variant="body" size="medium" className="text-n-10 font-semibold">Hasbi Ashshidiq</Typography>
              <Typography variant="body" size="medium" className="text-n-8 font-medium">14:50</Typography>
            </div>
            <div
              className="relative flex bg-chatRoom-user px-4 py-2.5 rounded-xl mt-1 before:content-[''] before:absolute before:left-[-8px] before:w-0 after:h-0
        before:border-t-[6px] before:border-t-transparent before:border-solid
        before:border-b-[6px] before:border-b-transparent
        before:border-r-[8px] before:border-r-chatRoom-user
        before:border-l-[0px]"
            >
              <Typography size="medium" className="text-n-1">
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequatur deleniti dignissimos dolorum eaque eveniet fuga ipsa ipsam maxime, modi nam necessitatibus nemo non nostrum possimus praesentium qui quo reiciendis repellat reprehenderit, sed tempore temporibus velit veniam voluptate voluptatem.
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end" />
      </div>
    </div>
  </div>
);

export default ChatRoom;
