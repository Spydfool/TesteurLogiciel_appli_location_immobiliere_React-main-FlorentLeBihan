import React from 'react';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Accueil</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2020 Kasa</p>
      </footer>
    </>
  );
}

export default Layout;