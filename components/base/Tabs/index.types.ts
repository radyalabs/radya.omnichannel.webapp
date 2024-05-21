import type { ReactElement, ReactNode } from 'react';

export interface TabPanelProps {
  children: ReactNode;
  value: number;
  index: number;
}

export interface TabsProps {
  children: ReactNode;
  className?: string;
  value: number;
  labels: string[];
  icons?: ReactElement[];
  selectedIcons?: ReactElement[];
  counters: number[];
  onChange: (tabIndex: number) => void;
  hrefs?: string[];
  variant?: 'standard' | 'fullWidth' | 'scrollable';
}
