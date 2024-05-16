import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/contexts/AuthContext';

const useHeader = () => {
  const router = useRouter();

  const { profile } = useAuthContext();

  const handleLogout = () => {
    router.push('/logout');
  };

  return {
    profile,
    handleLogout,
  };
};

export default useHeader;
