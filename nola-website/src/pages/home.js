import Gallery from "./gallery";
import { Component, useState } from 'react';
import React from 'react';
import Test, {Value} from "../components/test";
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