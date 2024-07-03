import type { Metadata } from 'next';

import { APP_TITLE } from '@/constants/config';
import CustomerMessage from '@/views/CustomerMessage';

export const metadata: Metadata = {
  title: `${APP_TITLE} - Customer Message`,
};

const CustomerMessagePage = () => <CustomerMessage />;

export default CustomerMessagePage;
