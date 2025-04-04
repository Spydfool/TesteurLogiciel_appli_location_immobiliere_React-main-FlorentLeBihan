import React from 'react';
import Header from './Header';
import '../styles.css';

function Layout({ children }) {
  return (
    <>
      <Header /> {}
      <main>{children}</main>
      <footer>
        <p>© 2020 Kasa</p>
      </footer>
    </>
  );
}

export default Layout;