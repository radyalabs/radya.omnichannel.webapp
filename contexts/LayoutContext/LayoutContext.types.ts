import type { ReactNode } from 'react';

export interface LayoutContextTypes {
  collapseSidebar: () => void;
  isCollapsed: boolean;
  showSidebar: () => void;
  toggleCollapsed: () => void;
}

export interface LayoutProviderProps {
  children: ReactNode;
}
