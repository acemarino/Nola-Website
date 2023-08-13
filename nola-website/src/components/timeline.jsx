
import Nav from 'react-bootstrap/Nav';

import {LinkContainer} from 'react-router-bootstrap'

export default function Timeline() {
  return (
    <>
  
<Nav>
        <ul className='navbar-nav ms-auto list-group list-group list-group-horizontal flex-nowrap'  id="collapse">

          <li>
              <div className='freshman'>freshman</div>
          </li>
          <li>
              <div className='sophomore'>sophomore</div>
          </li>
        </ul> 

        </Nav>
    </>
    );
  }