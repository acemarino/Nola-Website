
import Nav from 'react-bootstrap/Nav';

import {LinkContainer} from 'react-router-bootstrap'

export default function Timeline() {
  return (
    <>
  

        <ul className='nav '  role="tablist">

          <li className='nav-item'>
              <div id='Freshman' aria-controls="Freshman" aria-selected="true">Freshman</div>
          </li>
          <li className='nav-item'>
              <div id='Sophomore' aria-controls="Sophomore" aria-selected="true">Sophomore</div>
          </li>
          <li className='nav-item'>
              <div id='Junior' aria-controls="home" aria-selected="true">Junior</div>
          </li>
          <li className='nav-item'>
              <div className='Senior'>Senior</div>
          </li>
        </ul> 
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade "  aria-labelledby='Freshman'>tesitng fresh</div>
          <div className="tab-pane fade" aria-labelledby='Sophomore'>tesitng soph</div>
          <div className="tab-pane fade"  aria-labelledby='Junior'>tesitng junior</div>
        </div>
   
    </>
    );
  }