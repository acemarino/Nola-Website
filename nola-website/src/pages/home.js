import Gallery from "./gallery";
import { Component, useState } from 'react';
import React from 'react';
import Test, {Value} from "../components/test";



export default class Home extends Component{
    //<Gallery num={value}></Gallery>

    constructor(props){
        super(props);
        this.state = {
            NUM: "1",
            reload: false
        };
        this.handleChange= this.handleChange.bind(this)
    }

    
    handleChange() {
        this.setState({NUM: Value});
      }
     
      
render(){

    if(Value!==this.state.NUM){
        this.handleChange()
        this.forceUpdate();
    }
    return(
        <>
        
        <div>
            homepage
        <h1 >Num: {this.state.NUM}</h1>
        <h1 >Value: {Value}</h1>
       
        </div>
        <Gallery  num={this.state.NUM}></Gallery>
        </>
    );
      
}
} 