import Chip from '@/components/base/Chip';
import Typography from '@/components/base/Typography';
import { IcCheckResolved } from '@/components/icons';
import Avatar from '@/components/ui/Avatar';
import ChatItemType from '@/enums/chatItemType';
import type ChatItemProps from '@/views/Message/components/ChatItem/ChatItem.types';

const ChatItem = (props: ChatItemProps) => {
  const {
    placeholder, name, variant = ChatItemType.Unserved, onClick,
  } = props;

  return (
    <button onClick={onClick} className="border-b border-0 border-solid border-n-5 px-6 py-4 flex gap-4 items-center  hover:bg-n-5 active:bg-n-6 cursor-pointer">
      <div className="relative">
        <Avatar label={name} height={44} width={44} />
        {variant === ChatItemType.Resolved && (<IcCheckResolved className="absolute top-0 right-0" fill="#ffffff" viewBox="" />)}
      </div>
      <div className="flex flex-col justify-center grow w-1/3">
        <Typography
          className="max-w-full text-left text-ellipsis overflow-hidden text-nowrap text-n-10"
          variant="title"
          size="small"
        >
          {name}
        </Typography>
        <Typography
          className="text-n-8 max-w-full text-ellipsis overflow-hidden text-nowrap"
        >
          {placeholder}
        </Typography>
      </div>
      <div className="flex flex-col justify-between items-center min-h-full">
        <Typography className="text-n-8" size="small">
          Today 08.30
        </Typography>
        { variant === ChatItemType.Served && (<Chip label="Served" variant="filled" color="primary" />)}
        { variant === ChatItemType.Unserved && (<Chip label="Unserved" variant="filled" color="error" />)}
        { variant === ChatItemType.Resolved && (<Chip label="Resolved" variant="filled" color="success" />)}
      </div>
    </button>
  );
};

export default ChatItem;
