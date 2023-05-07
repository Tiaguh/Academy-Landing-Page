import React from "react";
import './header.css';
import icon from './img/icon5.png'

export default function Header() {
  return (
    <header>

      <div className='logo'>
        <img src={icon} alt="icon" />
        <p>Body Impact</p>
      </div>

      <div className='menu'>
        
        <a href='#'>Home</a>
        <a href='#'>Activities</a>

        <div className='menu-join'>
          <a href='#'>Join</a>
        </div>

      </div>

    </header>
  );
}