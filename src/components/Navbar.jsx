import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  // NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './NavbarStyles';
import '../components/index.css'

const Navbars = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Fragment>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavContainer>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks className='' href="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className='' href="Talkshow">Talkshow</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className='' href="Seminar">Seminar</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className='' href="Workshop">Workshop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className='' href="Competition">Competition</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className='' href="Jadwal">Jadwal</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Fragment>
  )
}

export default Navbars