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

  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setSearchValue(value);
  };

  const handleResetSearch = () => {
    setSearchValue('');
    handleSearchSubmit('');
  };

  const handleSearchEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === 'Enter') {
      handleSearchSubmit(searchValue);
    }
  };

  const { items = [] } = listConversation || {};

  return {
    tabValue,
    handleChangeTab,
    items,
    onSelectConversation,
    unresolvedChat,
    searchValue,
    handleChangeSearch,
    handleResetSearch,
    handleSearchEnter,
  };
};

export default useChatListPanel;
