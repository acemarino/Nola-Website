import Gallery from "./gallery";

import React from 'react';
import About from "./aboutMe";



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
        
        <div>
        <div id="header">Homepage</div>
    
        </div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
      
       
        
    
} 