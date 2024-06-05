import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import { IcFilter, IcFolderCheck, IcSearch } from '@/components/icons';

const ChatListHeader = () => (
  <div className="bg-n-4 px-5 py-4 flex justify-between">
    <div>
      <Typography variant="title" className="text-n-9">Inbox</Typography>
      <Typography className="text-n-7">Unserved Inbox: 7</Typography>
    </div>
    <div className="flex *:p-0 gap-2">
      <Button variant="text" color="primary"><IcFolderCheck /></Button>
      <Button variant="text" color="primary"><IcFilter /></Button>
      <Button variant="text" color="primary"><IcSearch /></Button>
    </div>
  </div>
);

export default ChatListHeader;
