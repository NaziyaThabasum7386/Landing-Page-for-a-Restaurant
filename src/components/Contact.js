import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <div id="contact-section" className="p-8 bg-background">
      <Container>
        <Typography variant="h4" className="mb-4 text-accent">Contact Us</Typography>
        <Typography variant="body1" className="mb-4 text-primary">
          We'd love to hear from you! Whether you have a question about our menu, a reservation inquiry, or just want to
          share your feedback, feel free to get in touch. You can reach us using the form below or via our social media
          channels. We look forward to connecting with you!
        </Typography>
        <form className="grid grid-cols-1 gap-4">
          <TextField label="Name" variant="outlined" fullWidth required />
          <TextField label="Email" type="email" variant="outlined" fullWidth required />
          <TextField label="Phone" type="tel" variant="outlined" fullWidth required />
          <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
