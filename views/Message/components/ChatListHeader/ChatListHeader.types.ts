import type { ReactNode } from 'react';

export interface ChatListHeaderProps {
  unresolvedChat: number;
  toggleShowSearch: () => void;
  children?: ReactNode;
}
