import Gallery from "./gallery";

import React from 'react';
import About from "./aboutMe";


var year;
const load="5";
export default function Home (props){
if(props.value==="6"){
    return(
        <>
            <About></About>
        </>
    );
}
if(props.value==="1"){
    year="Freshman";
    return(
        <>
        <div id="header">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
if(props.value==="2"){
    year="Sophmore";
    return(
        <>
        <div id="header">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
if(props.value==="3"){
    year="Junior";
    return(
        <>
        <div id="header">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}if(props.value==="4"){
    year="Senior";
    return(
        <>
        <div id="header">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
else{
    return(
        <>
        <Gallery num={load}></Gallery>
        </>
    );
}
      
       
        
    
} 