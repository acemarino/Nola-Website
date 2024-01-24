import React from 'react';
import Timeline, { yearContext } from "../components/timeline";


var Value=3;
 function Test(props) {
     Value = props.value;
     console.log(props);
     
}

export default Test;
console.log(Value)
export {Value};

