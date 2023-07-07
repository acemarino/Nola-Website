
import Nav from 'react-bootstrap/Nav';

import {LinkContainer} from 'react-router-bootstrap'

export default function Navigation() {
  return (
    <>
    <Nav>

        <LinkContainer to="/">
          {/*<Navbar.Brand>Granola</Navbar.Brand>*/}
          <img src="./granola_doodle_logo.png" alt="bug" height={100} />
        </LinkContainer>

        <ul className='navbar-nav ms-auto list-group list-group list-group-horizontal flex-nowrap'  id="collapse">
          
          <li>
            <LinkContainer  to="/aboutMe" >
              <div className='About'>
              </div>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer  to="/" >
              <div className='Home'></div>
            </LinkContainer>
          </li>
          
        </ul> 
        
        </Nav>
    
    </>
    );
  }