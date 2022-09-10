import React from "react";
import './header.css';
import icon from './img/icon5.png'

function Header() {
  return (
    <header>
      <div className='logo'>
        <img class="icon" src={icon} alt="" />
        <p>Body Impact</p>
      </div>
        <div className='item-menu'>
          <a href='#'>Home</a>
          <a href='#'>Activities</a>
          <div className='item-menu-join'>
            <a href='#'>Join</a>
          </div>
        </div>
      </header>
  );
}

export default Header;