import React from 'react';

import type { ContentProps } from './index.types';

const Content = (props: ContentProps) => {
  const { children } = props;
  return (
    <section
      className="text-gray-600 body-font font-sans pt-20 relative w-auto ml-24 transition-width transition-slowest ease"
    >
      {children}
    </section>
  );
};
export default Content;
