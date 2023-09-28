import Gallery from "./gallery";
import { Component, useState } from 'react';
import React from 'react';
import {Value} from "../components/test";



export default class Home extends Component{
    //<Gallery num={value}></Gallery>
   
    constructor(props){
        super(props);
        this.state = {
            NUM: "1",
            reload: false
        }
    }
    handleReload(reload) {
        this.setState({reload: true});
        this.setState({NUM: Value})
      }
      
render(){
   
    return(
        <>
        <div>
            homepage
        <h1 >{Value}</h1>
       
        </div>
        <Gallery reload={this.handleReload} num={Value}></Gallery>
        </>
    );
      
}
}