import Gallery from "./gallery";

import React from 'react';
import About from "./aboutMe";
import splash from "./images/Other/cluckySplash.png"

var year;
const onLoad="5";
var test="false"
export default function Home (props){
    if(props.cur===true){
       test="true"
    }
    else{
        test="false"
    }
if(props.value==="6"){
    return(
        <>
            <About></About>
        </>
    );
}
else if(props.value==="1"){
    year="Freshman";
   
    return(
        <> 
        <div id="gradeY">{year}</div>
        <Gallery num={props.value} ></Gallery>
        </>
    );
}
else if(props.value==="2"){
    year="Sophmore";
    return(
        <>
        <div id="gradeY">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
else if(props.value==="3"){
    year="Junior";
    return(
        <>
        <div id="gradeY">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
else if(props.value==="4"){
    year="Senior";
    return(
        <>
        <div id="gradeY">{year}</div>
        <Gallery num={props.value}></Gallery>
        </>
    );
}
else{
    return(
        <>
        <div  className="splashArt">
       
        <img src={splash} alt="clucky" id="splash"></img>
        </div>
        </>
    );
}
      
       
        
    
} 