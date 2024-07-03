'use client';

import Spinner from '@/components/base/Spinner';
import useDashboard from '@/views/Dashboard/Dashboard.hooks';

const Dashboard = () => {
  const {
    isLoaded,
    handleOnLoaded,
    handleOnError,
    OMNI_DASHBOARD_EMBED_SRC,
  } = useDashboard();

  return (
    <>
      {
        !isLoaded && (
          <div className="flex justify-center items-center w-full min-h-[300px]">
            <Spinner width={80} height={80} />
          </div>
        )
      }

      <iframe
        src={OMNI_DASHBOARD_EMBED_SRC}
        className="border-0 bg-transparent w-full min-h-[calc(100vh-10vh)]"
        width="800"
        height="600"
        title="Radya Omi Channel Dashboard"
        allowFullScreen
        onLoad={handleOnLoaded}
        onError={handleOnError}
      />
    </>
  );
};

export default Dashboard;
