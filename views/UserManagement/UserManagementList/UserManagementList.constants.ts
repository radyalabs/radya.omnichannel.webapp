import { INITIAL_PAGESIZE } from '@/constants/config';
import type { TableColumn } from '@/types/tables';

import type { UserQueryParams } from './UserManagementList.types';

export const INIT_QUERY_PARAMS: UserQueryParams = {
  s: '',
  orderBy: '',
  orderType: '',
  fullname: '',
  username: '',
  page: 1,
  size: INITIAL_PAGESIZE,
};
export const TABLE_COLUMNS: TableColumn[] = [
  {
    name: 'Username',
    dataKey: 'username',
    sortable: true,
    sortKey: 'Email',
    width: 200,
  },
  {
    name: 'Full Name',
    dataKey: 'fullName',
    sortable: true,
    sortKey: 'FullName',
    width: 200,
  },
];
