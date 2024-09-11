import React from 'react';

import { Footer, Navbar } from '@/components';

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
