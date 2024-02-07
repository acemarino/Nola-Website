
import React, { useState} from "react"
import Box from '@mui/material/Box';
import { Freshman } from "./images";
import { Senior } from "./images";
import { Home } from "./images";
import { Sophmore } from "./images";
import { Junior } from "./images";
import Masonry from '@mui/lab/Masonry';
import { Fade } from "@mui/material";
/*{isOpen && (
              <Modal
                src={`${year[2].img}?w=162&auto=format`}
                srcSet={`${year[2].img}}}?w=162&auto=format&dpr=2 2x`}
                alt={year[2].title}
                caption={year[2].title}
                onClose={() => setIsOpen(false)}
              />
              )}
              */
             var description;
export const Modal = ({ src, alt, title, size, desc, medium, onClose ,onLeft,onRight}) => {
  if(desc.length===0 ){
    description= <div></div>;
  }else{
   description= <div >Description: {desc}</div>;
  }
  return (
    <>
    <div className="modal-box">
   
    <div className="modalstuff">
      <span className="modal-content" >
        <img src={src} alt={alt} />
      </span>
      <div className="caption">
        <div >Title: {title}</div>
        <div >Size: {size}</div>
        <div >Medium: {medium}</div>
       {description}
      </div>
      <span className="close" onClick={onClose}>
       {'X'}
      </span>
      <span className="left" onClick={onLeft}>
      {'<'}
      </span>
      <div className="right" onClick={onRight}>
      {'>'}
      </div>
      </div>
      
      </div>
    </>
  )
}

export default function Gallery(props) {
  var year=Freshman;
  var grade="Freshman";
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
    max=9;
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
  const handleChange = () => {
    setLoad((prev) => !prev);
  };

  const showModal = (value) => {
    setIsOpen(true)
    setcurValue(value)
  }
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
    <Box sx={{ pl: 11, pr: 11, pt: 3, pb: 3 }} id='show' >
      <Masonry columns={{ sm: 1, md: 2, lg: 4 }} spacing={5} sx={{ width: "auto" }} className="galleryImg" >
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
          {isOpen && (
              <Modal
                src={`${year[curValue].img}?w=162&auto=format`}
                srcSet={`${year[curValue].img}}}?w=162&auto=format&dpr=2 2x`}
                alt={year[curValue].Title}
                title={year[curValue].Title}
                size={year[curValue].Size}
                medium={year[curValue].Medium}
                desc={year[curValue].Desc}
                onClose={() => setIsOpen(false)}
                onLeft={()=> leftNav()}
                onRight={()=> rightNav()}
              />
              )}
    
    
            
            </>
  );
}
