import React from 'react';

import './header.scss';
import LinkedIn from '../../img/linkedin.svg';
import Github from '../../img/github.svg';
import Instagram from '../../img/instagram.svg';

function Header() {
  return (
    <div className="Header">
      <h1 className="HeaderName">Brandon Huelga</h1>
      <div className="HeaderLinks">
        <a href="https://www.linkedin.com/in/bhuelga/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn"/></a>
        <a href="https://github.com/bhuelga/" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github"/></a>
        <a href="https://www.instagram.com/bhuelga/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram"/></a>
      </div>
    </div>
  );
}

export default Header;
