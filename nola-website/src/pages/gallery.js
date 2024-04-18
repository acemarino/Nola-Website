
import React, { useState} from "react"
import {IOSView, isIOS} from 'react-device-detect';
import {StyleSheet} from 'react-native';
//image imports
import { Freshman } from "./images";
import { Senior } from "./images"; //note: images are large and loading is choppy as a result
import { Home } from "./images";
import { Sophmore } from "./images";
import { Junior } from "./images";
import { extra } from "./images";

//import mui libraries
import Masonry from '@mui/lab/Masonry';
import { Fade } from "@mui/material";
import Box from '@mui/material/Box';
import {styled,createTheme,ThemeProvider,useTheme,} from '@mui/material/styles';
const styles = StyleSheet.create({
  iosCaption:{
    display:'flex',
    alignitems:  'start',
    maxwidth: '100%',
    paddingTop: '10px',
    color: '#ccc',
    padding: '0',
    marginTop: '10px',
    marginLeft:'18.5%',
    marginRight:'18.5%',
    fontfamily: 'Epilogue',
    
  }

});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1204,
      xl: 1536,
      xxl: 2000,
    },
  },
});

//art description, var since the infromation changes based on the piece 
var description;
var view;
//modal component with parameters
export const Modal = ({ src, alt, title, size, desc, medium, onClose ,onLeft,onRight }) => {
 
  //handles empty descriptions and non empty descriptions
  if(desc.length===0 ){
    description= <div></div>;
  }else{
   description= <div className='tagStyle' >Description: <span className="contentStyle">{desc}</span></div>;
  }
  if(isIOS === true){
    view=
    <div className="modalstuff" >
      <div className="modal-content" >
        <img src={src} alt={alt} className="modal-image" style={styles.iosImage}/>
      </div>
      <div style={styles.iosCaption} className="iosCaptionAnimation" >
        <ul className="captionList">
          <li className='tagStyle'> Title: <span className="contentStyle"> {title}</span></li>
          <li className='tagStyle'>Size: <span className="contentStyle">{size}</span></li>
          <li className='tagStyle'>Medium: <span className="contentStyle">{medium}</span></li>
          <li >{description}</li>
        </ul>  
      </div>
    </div>
  }
  else{
    view= 
    <div className="modalstuff" >
      <div className="modal-content" >
        <img src={src} alt={alt} className="modal-image" />
      </div>
      <div className="caption">
        <ul className="captionList">
          <li className='tagStyle'> Title: <span className="contentStyle"> {title}</span></li>
          <li className='tagStyle'>Size: <span className="contentStyle">{size}</span></li>
          <li className='tagStyle'>Medium: <span className="contentStyle">{medium}</span></li>
          <li >{description}</li>
        </ul>  
      </div>
    </div>
}
  return (
    <>
    {/*modal box for caroseul gallery viewing*/}
    <div className="modal-box" >
      <div onClick={onClose}>
        <img src={extra[4].img} alt={extra[4].Title} className="close" />
      </div>
      {view}
      <div  onClick={onLeft} id='Larrows'>
        <img src={extra[2].img} alt={extra[2].Title} className="left"  />
      </div>
      <div  onClick={onRight}id='Rarrows' >
        <img src={extra[3].img} alt={extra[3].Title}  className="right"/>
      </div>
    </div>
    </>
  )
}
//gallery function, display images in a masonry format using MUI Masonry
export default function Gallery(props) {
  var year=Freshman;
  var grade;
  var max=0;
  
  if(props.num === "1"){
    year=Freshman;
    grade="Freshman";
    max=7;
  }
  if(props.num === "2"){
    year=Sophmore;
    grade="Sophomore";
    max=12;
  }
  if(props.num === "3"){
    year=Junior;
    grade="Junior";
    max=6;
  }
  if(props.num === "4"){
    year=Senior;
    grade="Senior";
    max=9;
  }
  if(props.num === "5"){
    year=Home;
    grade="Home";
    max=2;
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const [load, setLoad] = useState(true)
  const [curValue, setcurValue] = useState(0)

  const showModal = (value) => {
    //takes in index from year.map((item, index) to set curValue
    setIsOpen(true)
    setcurValue(value)
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  }
  const closeModal = (value) => {
    //takes in index from year.map((item, index) to set curValue
    setIsOpen(false)
    setcurValue(value)
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
  //left carousel navigation
  const leftNav = () => {
    if((curValue-1)<0){
      setcurValue(max)
    }else{
      setcurValue(curValue-1)
    }
  }
  
  //right carousel navigation
  const rightNav = () => {
    if((curValue+1)>max){
      setcurValue(0)
    }else{
    setcurValue(curValue+1)
    }
  }
  return (
    <>
    {/*MUI box to contain MUI masonry gallery*/}
    <ThemeProvider theme={theme}>
    <Box sx={{ pl: 11, pr: 11, pt: 3, pb: 3 }} id='show' >
   
      <Masonry columns={{ sm: 1, md: 2, lg:3 , xl: 3 , xxl: 4}} spacing={5} sx={{ width: "auto" }} className="galleryImg" >
        {year.map((item, index) => (
            <div key={index}>
            <Fade 
              in={load} 
              timeout={{ enter: 1000, exit: 500 }}
              style={{ transitionDelay: `${index * 150}ms` }}
              key={`asi-${item.key}-${index}`}>
            <img
              onClick={() => showModal(index)}
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
                cursor: 'pointer',
              }} 
              />
            </Fade>
          </div>
        ))}
      </Masonry>
    </Box>
          
    {/*conditional rendering to display modal gallery*/}
          {isOpen && (
              <Modal
                src={`${year[curValue].img}?w=162&auto=format`}
                srcSet={`${year[curValue].img}}}?w=162&auto=format&dpr=2 2x`}
                alt={year[curValue].Title}
                title={year[curValue].Title}
                size={year[curValue].Size}
                medium={year[curValue].Medium}
                desc={year[curValue].Desc}
                onClose={() => closeModal()}
                onLeft={()=> leftNav()}
                onRight={()=> rightNav()}
              />
              )}
              </ThemeProvider>
    </>
  );
}
