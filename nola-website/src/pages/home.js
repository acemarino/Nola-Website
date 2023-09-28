import Gallery from "./gallery";
import Timeline, { yearContext } from "../components/timeline";
import { useState } from 'react';
import React from 'react';
import Test,{Value} from "../components/test";
function Home(props){
    //<Gallery num={value}></Gallery>
    

   const NUM= Value;
    return(
        <>
        <div >
            homepage
        <h1>{NUM}</h1>
       
        </div>
        <Gallery num={Value}></Gallery>
        </>
    );
        
}
export default Home;