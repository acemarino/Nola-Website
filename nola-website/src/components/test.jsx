import React from 'react';
import Timeline, { yearContext } from "../components/timeline";


var Value="3";
 function Test(props) {
     Value = props.value;
}
export default Test;
console.log("post Export:" +Value)
export {Value};

