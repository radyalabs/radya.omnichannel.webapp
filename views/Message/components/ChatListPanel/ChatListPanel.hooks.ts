import { type ChangeEvent, type KeyboardEvent, useState } from 'react';

import type {
  ChatListPanelProps,
} from '@/views/Message/components/ChatListPanel/ChatListPanel.types';

const useChatListPanel = (props: ChatListPanelProps) => {
  const {
    listConversation,
    onSelectConversation,
    onSwitchTab,
    unresolvedChat,
    handleSearchSubmit,
  } = props;
  const [tabValue, setTabValue] = useState(0);
  const handleChangeTab = (value: number) => {
    setTabValue(value);
    onSwitchTab(value);
  };

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setSearchValue(value);
  };

  const toggleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === 'Enter') {
      toggleShowSearch();
      handleSearchSubmit(searchValue);
    }
  };

  const handleResetSearch = () => {
    setSearchValue('');
    handleSearchSubmit('');
    toggleShowSearch();
  };

  const { items = [] } = listConversation || {};

  return {
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
  };
};

export default useChatListPanel;
