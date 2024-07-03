import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import { IcFilter, IcFolderCheck, IcSearch } from '@/components/icons';
import type {
  ChatListHeaderProps,
} from '@/views/Message/components/ChatListHeader/ChatListHeader.types';

const ChatListHeader = ({ unresolvedChat, children, toggleShowSearch }: ChatListHeaderProps) => (
  <div className="bg-n-4 px-5 py-4 flex justify-between relative">
    <div>
      <Typography variant="title" className="text-n-9">Inbox</Typography>
      <Typography className="text-n-7">{ `Unserved Inbox: ${unresolvedChat}` }</Typography>
    </div>
    <div className="flex *:p-0 gap-2">
      <Button variant="text" color="primary"><IcFolderCheck /></Button>
      <Button variant="text" color="primary"><IcFilter /></Button>
      <Button variant="text" color="primary" onClick={toggleShowSearch}><IcSearch /></Button>
    </div>
    {children}
  </div>
);

export default ChatListHeader;
