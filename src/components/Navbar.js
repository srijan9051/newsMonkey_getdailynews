import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${props.darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <div className="navbar-brand">{props.title}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.darkMode ? 'text-white' : ''}`} to="/technology">Technology</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="darkModeSwitch" 
              checked={props.darkMode} 
              onChange={props.toggleDarkMode} 
            />
            <label className={`form-check-label ${props.darkMode ? 'text-white' : ''}`} htmlFor="darkModeSwitch">
              {props.darkMode ? 'Light Mode' : 'Dark Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
