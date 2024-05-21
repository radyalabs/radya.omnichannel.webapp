import Chip from '@/components/base/Chip';
import Typography from '@/components/base/Typography';
import Avatar from '@/components/ui/Avatar';

const ChatItem = () => (
  <div className="border-b border-0 border-solid border-n-5 px-6 py-4 flex gap-4 items-center h-11 hover:bg-n-3 active:bg-n-5 cursor-default">
    <Avatar label="Hasbi Ashshidiq" height={44} width={44} />
    <div className="flex flex-col justify-center grow w-1/3">
      <Typography
        className="max-w-full text-ellipsis overflow-hidden text-nowrap"
        variant="title"
        size="small"
      >
        Hasbi Ashshidiq
      </Typography>
      <Typography
        className="text-n-8 max-w-full text-ellipsis overflow-hidden text-nowrap"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean tempus accumsan enim, quis ornare
        massa fermentum vitae. Etiam in ullamcorper nunc, ac venenatis diam
      </Typography>
    </div>
    <div className="flex flex-col justify-between items-center min-h-full">
      <Typography className="text-n-8" size="small">
        Today 08.30
      </Typography>
      <Chip label="Unserved" variant="filled" color="error" />
    </div>
  </div>
);

export default ChatItem;
