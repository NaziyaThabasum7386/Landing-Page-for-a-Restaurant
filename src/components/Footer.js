import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Foodie House. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
