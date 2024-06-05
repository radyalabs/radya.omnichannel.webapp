import { useState } from 'react';

import Tabs from '@/components/base/Tabs';
import {
  SolarUserCrossFill,
  SolarUserCrossFill1,
  SolarUsersGroupTwoRoundedBold,
  SolarUserSpeakFill,
} from '@/components/icons';
import { noop } from '@/utils';

import ChatItem from '../ChatItem';
import ChatListHeader from '../ChatListHeader';

interface ChatListPanelProps {
  setChatView?: (value: (((prevState: number) => number) | number)) => void;
}

const ChatListPanel = (props: ChatListPanelProps) => {
  const { setChatView = noop } = props;
  const [tabValue, setTabValue] = useState(0);
  const handleChangeTab = (value: number) => {
    setTabValue(value);
  };

  return (
    <div className="border-0 border-solid border-n-5 border-r-2 flex flex-col h-[calc(100vh-5rem)] max-w-96">
      <ChatListHeader />
      <Tabs
        className="pt-2"
        labels={['All', 'Unserved', 'Served', 'Resolved']}
        icons={[
          <SolarUsersGroupTwoRoundedBold className="fill-n-8" />,
          <SolarUserCrossFill className="fill-n-8" />,
          <SolarUserSpeakFill className="fill-n-8" />,
          <SolarUserCrossFill1 className="fill-n-8" />,
        ]}
        selectedIcons={[
          <SolarUsersGroupTwoRoundedBold className="fill-primary-500" />,
          <SolarUserCrossFill className="fill-primary-500" />,
          <SolarUserSpeakFill className="fill-primary-500" />,
          <SolarUserCrossFill1 className="fill-primary-500" />,
        ]}
        value={tabValue}
        variant="fullWidth"
        onChange={handleChangeTab}
      />
      {tabValue === 0 && (
        <div className="border-0 border-y border-solid border-n-5 grow overflow-y-scroll flex flex-col">
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Krisna Rusdiono"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="served"
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Arrizky Hasya Pratama"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="resolved"
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      )}
      {tabValue === 1 && (
        <div className="border-0 border-y border-solid border-n-5 grow overflow-y-scroll flex flex-col">
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      )}
      {tabValue === 2 && (
        <div className="border-0 border-y border-solid border-n-5 grow overflow-y-scroll flex flex-col">
          <ChatItem
            onClick={() => setChatView(1)}
            name="Krisna Rusdiono"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="served"
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="served"
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="served"
          />
        </div>
      )}
      {tabValue === 3 && (
        <div className="border-0 border-y border-solid border-n-5 grow overflow-y-scroll flex flex-col">
          <ChatItem
            onClick={() => setChatView(1)}
            name="Arrizky Hasya Pratama"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="resolved"
          />
          <ChatItem
            onClick={() => setChatView(1)}
            name="Hasbi Ashshidiq"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            variant="resolved"
          />
        </div>
      )}
    </div>
  );
};

export default ChatListPanel;
