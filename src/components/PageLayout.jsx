import React from 'react';
import Navigation from './Navigation';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
