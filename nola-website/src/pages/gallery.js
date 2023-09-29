

import * as React from 'react';
import Box from '@mui/material/Box';

import Masonry from '@mui/lab/Masonry';

export default function Gallery(props) {
  var year=Freshman;
  var grade="Freshman";
  console.log(props);
  if(props.num === "1"){
    year=Freshman;
    grade="Freshman";
    
  }
  if(props.num === "2"){
    year=Sophmore;
    grade="Sophmore";
  }
  if(props.num === "3"){
    year=Junior;
    grade="Junior";
  }
  if(props.num === "4"){
    year=Senior;
    grade="Senior";
  }
  console.log(grade);
 
  
  return (
    <>
   
    <Box sx={{ pl: 5, pr: 5, pt: 3, pb: 3 }} id='show'>
     <div id="header">{grade}</div>
      <Masonry columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} sx={{ width: "auto" }}>
        {year.map((item, index) => (
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
              }} />
          </div>
        ))}
      </Masonry>
    </Box></>
  );
}

const Freshman = [
  
  {
    img: './Freshman/PXL_20210119_202642726.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210125_012622218.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210210_201301713.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210318_114612865.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210428_180832469.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210505_221456227.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210513_135241681.jpg',
    title: 'Freshman',
  },
  {
    img: './Freshman/PXL_20210516_204939130.jpg',
    title: 'Freshman',
  },
 
];

const Sophmore = [
  {
    img: './Sophmore/PXL_20210912_211226408.jpg',
    title: '1',
  },
  {
    img: './Sophmore/PXL_20211006_200309614.jpg',
    title: '2',
  },
  {
    img: './Sophmore/PXL_20211201_192753409.jpg',
    title: '3',
  },
  {
    img: './Sophmore/PXL_20211203_191510482.jpg',
    title: '4',
  },
  {
    img: './Sophmore/PXL_20220111_205656515.jpg',
    title: '5',
  },
  {
    img: './Sophmore/PXL_20220209_225308083~2.jpg',
    title: '6',
  },
  {
    img: './Sophmore/PXL_20220223_193147196.MP.jpg',
    title: '7',
  },
  {
    img: './Sophmore/PXL_20220225_192420313.jpg',
    title: '8',
  },
  {
    img: './Sophmore/PXL_20220331_182231806.jpg',
    title: '9',
  },
  {
    img: './Sophmore/PXL_20220405_183204302.jpg',
    title: '10',
  },
  {
    img: './Sophmore/PXL_20220428_183020265.jpg',
    title: '11',
  },
  {
    img: './Sophmore/PXL_20220525_222305195.jpg',
    title: '12',
  },
  {
    img: './Sophmore/PXL_20220603_181724794.jpg',
    title: '13',
  },
  {
    img: './Sophmore/PXL_20221029_193509607.jpg',
    title: '14',
  },

];

const Junior =[
  {
    img: './Junior/IMG_1735.png',
    title: '1',
  },
  {
    img: './Junior/IMG_1956.png',
    title: '2',
  },
  {
    img: './Junior/IMG_2075.png',
    title: '3',
  },
  {
    img: './Junior/original_98dd96e5-6c4e-4592-a5a7-4daccae54795_PXL_20230412_140853877.jpg',
    title: '4',
  },
  {
    img: './Junior/original_a6379bfc-c9e5-4614-b4b0-b923d5627d7b_PXL_20230412_141053482.jpg',
    title: '5',
  },
  {
    img: './Junior/original_c96a9dd6-f3f2-4ff1-956f-bab1e54817f0_PXL_20230412_140137425.jpg',
    title: '6',
  },
  {
    img: './Junior/original_f0e21930-dd48-4d98-af4e-2851439d28ee_PXL_20230412_140640457.jpg',
    title: '7',
  },
  {
    img: './Junior/original_f5353b73-0de3-403c-a980-c9cc2a775b59_PXL_20230412_140350353.jpg',
    title: '8',
  },
  {
    img: './Junior/PXL_20220823_134007063.jpg',
    title: '9',
  },
  {
    img: './Junior/PXL_20230601_151540870.jpg',
    title: '10',
  },
];

const Senior =[

];