import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import halal from '../src/assets/halal.png';

// Iconic Bar Component
const IconBar = () => {
  return (
    <div className="fixed top-14 right-4 z-50"> {/* Fixed position with some offset */}
      <img src={halal} alt="Halal Certification" className="w-32" /> {/* Adjust width using Tailwind */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <IconBar /> {/* Add Iconic Bar here */}
      <Navbar />
      <HeroSection/>
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
