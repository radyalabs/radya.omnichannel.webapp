import type { ReactNode } from 'react';

import type { SortParam, TableColumn } from '@/types/tables';

export interface TableProps<T> {
  appendHeader?: ReactNode;
  arrayColumnKey?: string;
  arrayColumnUniqueKey?: string;
  data: T[];
  columns: Array<TableColumn<Extract<keyof T, string>>>;
  exportBtnLabel?: string;
  hasArrayColumn?: boolean;
  hiddenColumns?: string[];
  label?: Partial<TableLabel>;
  loading?: boolean;
  page?: number;
  pageSize?: number;
  rowActions?: Array<ActionProps<T>>;
  searchPlaceholder?: string;
  searchValue?: string;
  showCountTotal?: boolean;
  showExportButton?: boolean;
  showPagination?: boolean;
  showPageSizeChanger?: boolean;
  showSearch?: boolean;
  showAuditTrail?: boolean;
  statusLabels?: string[];
  totalData?: number;
  onClickDetail?: (id: string) => void;
  onClickExport?: () => void;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (page: number) => void;
  onFilterChange?: (filter: Record<string, string>) => void;
  onSearchChange?: (query: string) => void;
  onSortChange?: (sortState: SortParam) => void;
  uniqueRowKey: keyof T;
}

export interface ActionProps<T = Record<string, unknown>> {
  color?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  onClick: (row: T) => void;
  icon?: string | ReactNode;
  disabledFn?: (row: T) => boolean;
  showFn?: (row: T) => boolean;
  tooltip?: string;
}

export interface SortState {
  active: boolean;
  direction: 'asc' | 'desc';
}

export interface DynamicSortState {
  [key: string]: SortState;
}

export interface TableLabel {
  emptyState: Partial<EmptyStateLabel>
}

export interface EmptyStateLabel {
  title: string;
  message: string;
}
