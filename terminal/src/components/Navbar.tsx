// Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../images/G4.jpg'; 

 

function Navbar() { 
  const navigate = useNavigate(); 
  return (
    <nav className="navbar">
      <div className="logoContainer">
         <Link to="/">
          <img
            src={logo} // Use the imported image
            alt="HelpFIX Logo"
            width={100}
            height={100}
            className="logo"
          />
        </Link>
      </div> 
      <ul className="navLinks">
        <li>
          <Link to="/">Terminal</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li> 
      </ul>
    </nav>
  );
}

export default Navbar;
