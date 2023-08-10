/*
function Gallery(){
    return(
        <>
       <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
        <div >
            <div id='header'>
                This is the Gallery
            </div>
            
        </div>
        
        <div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 160 }'>
        <div class="grid-sizer"></div>
            <div class="grid-item">
            <img src="./20230707_112047.jpg" alt="bug"  />
            </div> 
            <div class="grid-item">
            <img src="./20230701_194324.jpg" alt="bug"  />
            </div>   
            <div class="grid-item">
            <img src="./20230706_163905.jpg" alt="bug" />
            </div>  
            <div class="grid-item">
            <img src="./20230706_163907.jpg" alt="bug" />
            </div> 
            <div class="grid-item">
            <img src="./20230704_222926.jpg" alt="bug" />
            </div>     
        </div>
       </> 
    );
        
}
export default Gallery;
*/

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function Gallery() {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: './20230707_112047.jpg',
    title: 'Fern',
  },
  {
    img: './20230701_194324.jpg',
    title: 'Snacks',
  },
  {
    img: './20230706_163905.jpg',
    title: 'Mushrooms',
  },
  {
    img: './20230706_163907.jpg',
    title: 'Tower',
  },
  {
    img: './20230704_222926.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];