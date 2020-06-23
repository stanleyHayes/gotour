import React from 'react';
import Header from '../navigation/Header';

function Layout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>{children}</div>

      <div></div>
    </div>
  );
}

export default Layout;
