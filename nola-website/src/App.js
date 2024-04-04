import React from 'react'

import OffCanNav from './components/OffCanNav.jsx'
import './custom.scss'
import  ImgClick  from './testImgClick.jsx';

export default function App() {
  //<Route path="/" element={<Home />}/>
  /*
   
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutMe" element={<About />} />
      </Routes>
    </Router>   
     constructor(props) {
    super(props);
    this.state = {
      key: 1,
      title: "year"
    };
   //this.handleSelect = this.handleSelect.bind(this);
   
  }
  handleSelect(key) {
    this.setState({key});
    console.log("App.js handleSelect")
  }
      
*/
 
  return (
    <>
    <div>
      <OffCanNav></OffCanNav>
    </div>
    
    </>
  );

}


