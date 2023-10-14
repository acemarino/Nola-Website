import Gallery from "./gallery";

import React from 'react';
import About from "./aboutMe";


var year;
export default function Home (props){



if(props.value==="6"){
    return(
        <>
            <About></About>
        </>
    );
}else{
    return(
        <>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
      
       
        
    
} 