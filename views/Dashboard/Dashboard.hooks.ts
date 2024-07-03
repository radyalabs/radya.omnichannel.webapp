import { useState } from 'react';

import { ENDPOINT } from '@/constants/apiURL';
import useToaster from '@/hooks/useToaster';

const useDashboard = () => {
  const toaster = useToaster();
  const [isLoaded, setIsLoaded] = useState(false);
  const { DASHBOARD: { OMNI_DASHBOARD_EMBED_SRC } } = ENDPOINT;

  const handleOnLoaded = () => {
    setIsLoaded(true);
  };

  const handleOnError = () => {
    toaster.error('Something went wrong while retrieving dashboard data');
  };

  return {
    isLoaded,
    handleOnLoaded,
    handleOnError,
    OMNI_DASHBOARD_EMBED_SRC,
  };
};

export default useDashboard;
