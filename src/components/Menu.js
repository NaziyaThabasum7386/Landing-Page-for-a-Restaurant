import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, MenuItem, Select } from '@mui/material';
import { motion } from 'framer-motion';
import chickenBiryani from '../assets/chickenbiryani.mp4';
import goatBiryani from '../assets/aboutvid.mp4';
import prawnsBiryani from '../assets/prawns.mp4';
import bonelessChicken from '../assets/boneless chicken.mp4';
import chickenTandoori from '../assets/chicken tandoori.mp4';
import friedChicken from '../assets/fried chicken.mp4';
import grilledChicken from '../assets/grilled chicken.mp4';
import mushroomCurry from '../assets/mashrooms.mp4';
import paneerTikka from '../assets/pannertikka.mp4';
import tacos from '../assets/mexican food tacos.mp4';
import burger from '../assets/burger.mp4';
import noodles from '../assets/noodels.mp4';
import pizza from '../assets/pizza.mp4';
import chocolateBrownie from '../assets/Chocolate brownies.mp4';
import vanillaIceCream from '../assets/vanilla ice cream.mp4';
import waffleCone from '../assets/waffle cone.mp4';
import redVelvetCupcake from '../assets/Red Velvet.mp4';
import donut from '../assets/Donut.mp4';
import biscuitPastry from '../assets/BiscuitPastry.mp4';

const menuItems = [
  { id: 1, name: 'Hyderabad Chicken Dum Biryani', description: 'Slow-cooked chicken with basmati rice and spices. Served with raita.', price: '$15.99', category: 'Biryani', isVideo: true, img: chickenBiryani },
  { id: 2, name: 'Hyderabad Goat Dum Biryani', description: 'Tender goat meat layered with spiced basmati rice. Served with raita.', price: '$18.99', category: 'Biryani', isVideo: true, img: goatBiryani },
  { id: 3, name: 'Prawns Biryani', description: 'Spiced basmati rice with fresh prawns.', price: '$17.99', category: 'Biryani', isVideo: true, img: prawnsBiryani },
  { id: 4, name: 'Boneless Chicken Biryani', description: 'Boneless chicken pieces cooked with fragrant basmati rice.', price: '$16.99', category: 'Biryani', isVideo: true, img: bonelessChicken },
  { id: 5, name: 'Chicken Tandoori', description: 'Juicy chicken marinated in yogurt and spices, grilled to perfection.', price: '$12.99', category: 'Curries', isVideo: true, img: chickenTandoori },
  { id: 6, name: 'Fried Chicken', description: 'Crispy fried chicken served with a side of fries.', price: '$10.99', category: 'Fast Food', isVideo: true, img: friedChicken },
  { id: 7, name: 'Grilled Chicken', description: 'Grilled chicken breast served with vegetables.', price: '$13.99', category: 'Curries', isVideo: true, img: grilledChicken },
  { id: 8, name: 'Mushroom Curry', description: 'Delicious mushroom curry cooked with a blend of spices.', price: '$11.99', category: 'Curries', isVideo: true, img: mushroomCurry },
  { id: 9, name: 'Paneer Tikka', description: 'Marinated paneer cubes grilled to perfection.', price: '$9.99', category: 'Curries', isVideo: true, img: paneerTikka },
  { id: 10, name: 'Mexican Food Tacos', description: 'Traditional Mexican tacos with meat and vegetables.', price: '$8.99', category: 'Fast Food', isVideo: true, img: tacos },
  { id: 11, name: 'Burger', description: 'Juicy beef burger with cheese, lettuce, and tomato.', price: '$7.99', category: 'Fast Food', isVideo: true, img: burger },
  { id: 12, name: 'Noodles', description: 'Stir-fried noodles with vegetables and your choice of meat.', price: '$9.99', category: 'Fast Food', isVideo: true, img: noodles },
  { id: 13, name: 'Pizza', description: 'Cheesy pizza with your choice of toppings.', price: '$11.99', category: 'Fast Food', isVideo: true, img: pizza },
  { id: 14, name: 'Chocolate Brownie', description: 'Rich chocolate brownie served with a scoop of vanilla ice cream.', price: '$5.99', category: 'Desserts', isVideo: true, img: chocolateBrownie },
  { id: 15, name: 'Vanilla Ice Cream', description: 'Creamy vanilla ice cream topped with chocolate syrup.', price: '$4.99', category: 'Desserts', isVideo: true, img: vanillaIceCream },
  { id: 16, name: 'Waffle Cone', description: 'Crispy waffle cone filled with chocolate ice cream.', price: '$3.99', category: 'Desserts', isVideo: true, img: waffleCone },
  { id: 17, name: 'Red Velvet Cupcake', description: 'Moist red velvet cupcake with cream cheese frosting.', price: '$3.49', category: 'Bakery', isVideo: true, img: redVelvetCupcake },
  { id: 18, name: 'Donut', description: 'Classic glazed donut with a soft and fluffy texture.', price: '$2.99', category: 'Bakery', isVideo: true, img: donut },
  { id: 19, name: 'Biscuit Pastry', description: 'Buttery biscuit pastry with a sweet filling.', price: '$2.49', category: 'Bakery', isVideo: true, img: biscuitPastry },
];

const categories = ['All', 'Biryani', 'Curries', 'Fast Food', 'Desserts', 'Bakery'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="p-8 bg-orange-950">
      <Typography variant="h4" className="mb-4 text-accent">Menu</Typography>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-4"
        sx={{ backgroundColor: 'white' }}
      >
        {categories.map(category => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
      <Grid container spacing={3}>
        {filteredItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id} className="h-full">
            <Paper className="p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full flex flex-col">
              {item.isVideo ? (
                <motion.video
                  src={item.img} // This will be the video file for the item
                  className="w-full h-48 object-cover mb-2 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <motion.img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-48 object-cover mb-2 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              )}
              <Typography variant="h6" className="font-bold">{item.name}</Typography>
              <Typography className="text-sm">{item.description}</Typography>
              <Typography className="font-bold text-primary">{item.price}</Typography>
              <Button variant="contained" color="secondary" href={`order/${item.id}`} className="mt-auto">
                Order Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;
