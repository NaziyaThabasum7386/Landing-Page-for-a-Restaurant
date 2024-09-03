import React from 'react';
import { Container, Typography } from '@mui/material';
import aboutVid from '../assets/aboutvid.mp4'; // Import your video

const About = () => {
  return (
    <div 
      id="about-section" 
      className="bg-orange-500 bg-cover bg-center py-16"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Video */}
          <div className="flex justify-center ">
            <video 
              src={aboutVid} 
              className="img-fluid rounded-2xl object-cover h-48 shadow-lg transform transition-transform duration-500 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '1800px', height: '450px' }} // Set custom width and height
              alt="About Video"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <Typography variant="h1" className="text-white">About Us</Typography>
            <Typography variant="h6" className="mb-4 text-white text-justify text-primary">
              Foodie House was founded in 2020 with the vision of bringing delicious, high-quality meals to the community.
              Our journey started with a small family restaurant, and today we are proud to be one of the most popular
              dining spots in the city. Our chefs use only the freshest ingredients to prepare every dish, ensuring that
              every bite is a delight. Whether you're here for a quick lunch or a lavish dinner, we promise a dining
              experience that will make you come back for more.
            </Typography>
            <Typography variant="h6" className="mb-4 text-red-900 text-justify text-primary">
              Our restaurant features a cozy atmosphere, perfect for family gatherings, romantic dinners, or casual
              meet-ups with friends. We believe in creating a welcoming environment where everyone feels at home. 
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
