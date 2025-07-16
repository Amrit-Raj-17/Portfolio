import React from 'react';
import './Navbar.css';

function Navbar({ darkMode, toggleMode }) {
  return (
    <nav className="navbar" title="Dev by day, debugger by night.">
      <div className="logo typing">
        <span className="keyword">Amrit</span> <span className="variable">Raj</span>  <span className="string">Thakur</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button onClick={toggleMode} className="toggle-btn">
            {darkMode ? '🌙' : '🌞'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
