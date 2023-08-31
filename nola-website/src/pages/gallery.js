

import * as React from 'react';
import Box from '@mui/material/Box';

import Masonry from '@mui/lab/Masonry';

export default function Gallery() {
  return (
    <Box sx={{  padding: 3 ,}}>
      <Masonry columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} sx={{ width: "auto" }}>
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
    img: './IMG_1735.png',
    title: 'Fern',
  },
  {
    img: './IMG_1889.png',
    title: 'Snacks',
  },
  {
    img: './IMG_1890.png',
    title: 'Mushrooms',
  },
  {
    img: './IMG_1956.png',
    title: 'Tower',
  },
  {
    img: './original_98dd96e5-6c4e-4592-a5a7-4daccae54795_PXL_20230412_140853877.jpg',
    title: 'Sea star',
  },
  {
    img: './original_6065cd59-bb65-4529-9490-8106f4caeca5_PXL_20230412_141306890.jpg',
    title: 'Honey',
  },
  {
    img: './original_a6379bfc-c9e5-4614-b4b0-b923d5627d7b_PXL_20230412_141053482.jpg',
    title: 'Basketball',
  },
  {
    img: './original_b43e672f-67f7-440a-b1ab-c14329bd5b79_PXL_20230412_141315077.jpg',
    title: 'Breakfast',
  },
  {
    img: './original_c96a9dd6-f3f2-4ff1-956f-bab1e54817f0_PXL_20230412_140137425.jpg',
    title: 'Tree',
  },
  {
    img: './original_e5b0456d-3383-429a-ae43-788f0a70709d_PXL_20230412_141324890.jpg',
    title: 'Burger',
  },
  {
    img: './original_ef183b23-8ce4-414f-bb91-d46fed1bfd7c_PXL_20230227_144431218.jpg',
    title: 'Camera',
  },
  {
    img: './original_f0e21930-dd48-4d98-af4e-2851439d28ee_PXL_20230412_140640457.jpg',
    title: 'Coffee',
  },
  {
    img: './original_f5353b73-0de3-403c-a980-c9cc2a775b59_PXL_20230412_140350353.jpg',
    title: 'Camping Car',
  },
  {
    img: './PXL_20220209_225308083~2.jpg',
    title: 'Hats',
  },
  {
    img: './PXL_20220223_193147196.MP.jpg',
    title: 'Tomato basil',
  },
  {
    img: './PXL_20220428_183020265.jpg',
    title: 'Mountain',
  },
  {
    img: './PXL_20220525_222305195.jpg',
    title: 'Bike',
  },
];