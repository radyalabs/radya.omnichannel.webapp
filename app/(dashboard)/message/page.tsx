import type { Metadata } from 'next';

import { APP_TITLE } from '@/constants/config';
import Message from '@/views/Message';

export const metadata: Metadata = {
  title: `${APP_TITLE} - Message`,
};

const MessagePage = () => <Message />;

export default MessagePage;
