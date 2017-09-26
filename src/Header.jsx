import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">programng</Link>
      </div>
      <ul className="header-nav-list">
        <Link to="/about"><li className="header-nav-list-item">About</li></Link>
        <Link to="/portfolio"><li className="header-nav-list-item">Portfolio</li></Link>
        <Link to="/blog"><li className="header-nav-list-item">Blog</li></Link>
      </ul>
    </div>
  );
}

export default Header;
