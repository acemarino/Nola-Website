import Gallery from "./gallery";
import Timeline, { yearContext } from "../components/timeline";
import { useState } from 'react';
import React from 'react';
function Home(props){
    //<Gallery num={value}></Gallery>
    const value = React.useContext(yearContext);
    return(
        <>
        
        
        
        <div >
    homepage
            <h1>{value}</h1>
       
        </div>
        
        </>
    );
        
}
export default Home;