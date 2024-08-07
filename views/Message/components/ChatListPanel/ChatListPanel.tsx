import Tabs from '@/components/base/Tabs';
import {
  SolarUserCrossFill,
  SolarUserCrossFill1,
  SolarUsersGroupTwoRoundedBold,
  SolarUserSpeakFill,
} from '@/components/icons';

import ChatItem from '../ChatItem';
import ChatListHeader from '../ChatListHeader';

import useChatListPanel from './ChatListPanel.hooks';
import type { ChatListPanelProps } from './ChatListPanel.types';

const ChatListPanel = (props: ChatListPanelProps) => {
  const {
    tabValue,
    handleChangeTab,
    items,
    onSelectConversation,
    unresolvedChat,
    searchValue,
    handleChangeSearch,
    handleResetSearch,
    handleSearchEnter,
  } = useChatListPanel(props);

  return (
    <div
      className="border-0 border-solid border-n-5 border-r-2 flex flex-col h-[calc(100vh-5rem)] max-w-96 relative"
    >
      <ChatListHeader
        unresolvedChat={unresolvedChat}
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
        handleResetSearch={handleResetSearch}
        handleSearchEnter={handleSearchEnter}
      />

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
      <div
        className="border-0 border-y border-solid border-n-5 grow overflow-y-scroll flex flex-col"
      >
        {
          items.map((data) => (
            <ChatItem
              key={data.conversationId}
              name={data.name}
              onClick={() => onSelectConversation(data.conversationId)}
              variant={data.status}
              placeholder={data.lastMessage}
              date={data.date}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ChatListPanel;
