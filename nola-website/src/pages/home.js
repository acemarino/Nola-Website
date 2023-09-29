import Gallery from "./gallery";
import { Component, useState } from 'react';
import React from 'react';
import {Value} from "../components/test";



export default class Home extends Component{
    //<Gallery num={value}></Gallery>
   
    constructor(props){
        super(props);
        this.state = {
            NUM: Value,
            reload: false
        }
    }

    
    handleReload() {
        this.setState({reload: true});
      }
     
render(){

    return(
        <>
        <div>
            homepage
        <h1 >{Value}</h1>
       
        </div>
        <Gallery  num={Value}></Gallery>
        </>
    );
      
}
} 