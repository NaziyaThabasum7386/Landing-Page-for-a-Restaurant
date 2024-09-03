// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Import the logo from the assets folder
import zomatoIcon from '../assets/Zomato.png'; // Import Zomato icon
import swiggyIcon from '../assets/swiggy.jpg'; // Import Swiggy icon
import dIcon from '../assets/dotpe.png'; // Import Direct Order icon
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black flex justify-between items-center p-4 z-50 shadow-lg">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Use the imported logo */}
        </Link>
      </div>
       {/* Order Now Section */}
       <div className="absolute  justify-self-center left-10 right-10 flex flex-col justify-center items-center text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
            <img src={zomatoIcon} className="h-12 w-auto" alt="Zomato" />
          </a>
          <a href="https://swiggy.com" target="_blank" rel="noopener noreferrer">
            <img src={swiggyIcon} className="h-12 w-auto" alt="Swiggy" />
          </a>
          <a href="https://dotpe.in/" target="_blank" rel="noopener noreferrer">
            <img src={dIcon} className="h-12 w-auto" alt="Direct Order" />
          </a>
        </div>
      </div> 
      <div className="flex space-x-4">
        <Link className="text-white" to="#home">Home</Link>
        <Link className="text-white" to="#services">Services</Link>
        <Link className="text-white" to="#menu">Menu</Link>
        <Link className="text-white" to="#about">About Us</Link>
        <Link className="text-white" to="#gallery">Gallery</Link>
        <Link className="text-white" to="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
