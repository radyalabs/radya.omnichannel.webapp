import type { ChangeEvent, KeyboardEvent } from 'react';

export interface ChatListHeaderProps {
  unresolvedChat: number;
  searchValue: string;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  handleResetSearch: () => void;
  handleSearchEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
}
