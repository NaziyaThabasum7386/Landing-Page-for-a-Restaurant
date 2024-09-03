import React from 'react';
import { Typography, Container, Box, Rating } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  { name: 'Mrs. Taheer', review: 'Amazing food! Will definitely come back.', rating: 5 },
  { name: 'Jane Smith', review: 'The best dining experience ever.', rating: 4 },
  { name: 'Suma Gouder', review: 'Love this place for their biriyanis. A family pack can easily feed 3-4 members. Give it a try when you crave for authentic Hyderabadi biriyani 🤗', rating: 5 },
  { name: 'Dr. Rutuparna', review: 'A very good place for Biriyani and other north Indian main courses. Staff is friendly, ambience is lovely, service is fast, and food is delicious.', rating: 5 },
  { name: 'Kishore Meda', review: 'Awesome food and service. Good place for Biriyani lovers. Visited number of times for that biriyani flavor.', rating: 4.5 },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container className="p-8 bg-background">
      <Typography variant="h4" className="mb-4 text-accent" align="center">
        What Our Customers Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} className="mb-4" textAlign="center" px={2}>
            <Typography variant="h6" className="text-primary">
              {testimonial.name}
            </Typography>
            <Typography variant="body1" className="my-2">
              {testimonial.review}
            </Typography>
            <Rating
              value={testimonial.rating}
              precision={0.5}
              readOnly
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarIcon fontSize="inherit" />}
            />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
