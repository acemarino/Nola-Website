import Gallery from "./gallery";
import { Component, useState } from 'react';
import React from 'react';
import Test, {Value} from "../components/test";



export default class Home extends Component{
    //<Gallery num={value}></Gallery>

    constructor(props){
        super(props);
        this.state = {
            key: "1",
            reload: false
        };
        //this.handleChange= this.handleChange.bind(this)
    }

    
    handleChange() {
        this.setState({key: Value});
        console.log("home.js handleChange:"+Value)

      }
     
      
    render(){
        console.log("Value:" + Value);
        if(Value!==this.state.key){
        this.handleChange()
        console.log("key Changed");
        }
        console.log("inside render");
        return(
            <>
            
            <div>
                homepage
            <h1 >key: {this.state.key}</h1>
            <h1 >Value: {Value}</h1>
        
            </div>
            <Gallery num={Value}></Gallery>
            </>
        );
        
    }
} 