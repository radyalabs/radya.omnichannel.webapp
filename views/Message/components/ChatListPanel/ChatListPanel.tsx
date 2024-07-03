import Button from '@/components/base/Button';
import Tabs from '@/components/base/Tabs';
import TextField from '@/components/base/Textfield';
import {
  IcSearch,
  IcX,
  SolarUserCrossFill,
  SolarUserCrossFill1,
  SolarUsersGroupTwoRoundedBold,
  SolarUserSpeakFill,
} from '@/components/icons';
import useChatListPanel from '@/views/Message/components/ChatListPanel/ChatListPanel.hooks';
import type { ChatListPanelProps } from '@/views/Message/components/ChatListPanel/ChatListPanel.types';

import ChatItem from '../ChatItem';
import ChatListHeader from '../ChatListHeader';

const ChatListPanel = (props: ChatListPanelProps) => {
  const {
    tabValue,
    handleChangeTab,
    items,
    onSelectConversation,
    unresolvedChat,
    toggleShowSearch,
    showSearch,
    searchValue,
    handleChangeSearch,
    handleSearchEnter,
    handleResetSearch,
  } = useChatListPanel(props);

  return (
    <div
      className="border-0 border-solid border-n-5 border-r-2 flex flex-col h-[calc(100vh-5rem)] max-w-96 relative"
    >
      <ChatListHeader toggleShowSearch={toggleShowSearch} unresolvedChat={unresolvedChat}>
        {
          showSearch
          && (
            <div className="block absolute -bottom-full -right-1/2 -translate-x-1/2  z-10 w-full">
              <div className="flex gap-3 bg-white w-full py-6">
                <TextField placeholder="Search customer" className="w-full ml-4" value={searchValue} onChange={handleChangeSearch} onKeyDown={handleSearchEnter} prependObject={<IcSearch />} block />
                <Button color="primary" size="small" className="mr-4" onClick={handleResetSearch}><IcX className="[&>*]:fill-gray-50" /></Button>
              </div>
            </div>
          )
        }
      </ChatListHeader>
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
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          ))
        }
      </div>
    </div>
  );
};

export default ChatListPanel;
