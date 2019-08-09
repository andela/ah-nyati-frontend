import React from 'react';
import { Link } from 'react-router-dom';
import '../../variables.scss';
import './index.scss';
import svg from '../../svg';

/**
 * @description Navbar Component
 * @param props
 * @returns {func} Navbar
 */
export default function index() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={svg.logo} alt="" />
        <Link to="/" className="navbar-logo__title">Authors Haven</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
        <li className="navbar-item"><Link to="/register" className="navbar-link">Register</Link></li>
        <li className="navbar-item"><Link to="/articles" className="navbar-link">Articles</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
      </ul>
    </nav>
  );
}
