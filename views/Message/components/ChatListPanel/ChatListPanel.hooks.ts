import { useState } from 'react';

import type {
  ChatListPanelProps,
} from '@/views/Message/components/ChatListPanel/ChatListPanel.types';

const useChatListPanel = (props: ChatListPanelProps) => {
  const { listConversation, onSelectConversation, onSwitchTab } = props;
  const [tabValue, setTabValue] = useState(0);
  const handleChangeTab = (value: number) => {
    setTabValue(value);
    onSwitchTab(value);
  };

  const { items = [] } = listConversation || {};

  return {
    onSelectConversation,
    tabValue,
    handleChangeTab,
    items,
  };
};

export default useChatListPanel;
