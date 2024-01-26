import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

const PageLayout = ({ children }) => {
  return (
    <div>
       <Header />
      <div className='bg-gray-100 min-h-screen p-4 mt-10'>{children}</div>
      <Navigation />
    </div>
  );
};

export default PageLayout;
