import React from 'react';

import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <nav 
    role="navigation"
    aria-label="Main menu"
    itemScope
    itemType="https://schema.org/SiteNavigationElemet"
    >
        <ul>
            <li><Link itemProp="url" to="/">HomePage</Link></li>
            <li><Link itemProp="url" to="/about">About</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;