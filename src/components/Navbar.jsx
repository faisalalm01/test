// import React, { useState, Fragment } from 'react'
// import { FaBars } from 'react-icons/fa';
// import {
//   Nav,
//   NavContainer,
//   // NavLogo,
//   NavItem,
//   NavLinks,
//   NavMenu,
//   MobileIcon,
// } from './NavbarStyles';
// import '../components/index.css'

// const Navbars = () => {
//   const [colorChange, setColorchange] = useState(false);
//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setColorchange(true);
//     }
//     else {
//       setColorchange(false);
//     }
//   };
//   window.addEventListener('scroll', changeNavbarColor);
//   return (
//     <Fragment>
//       <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
//         <NavContainer>
//           <MobileIcon>
//             <FaBars />
//           </MobileIcon>
//           <NavMenu>
//             <NavItem>
//               <NavLinks className='' href="/">Home</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks className='' href="/Talkshow">Talkshow</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks className='' href="/Seminar">Seminar</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks className='' href="/Workshop">Workshop</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks className='' href="/Competition">Competition</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks className='' href="/Jadwal">Jadwal</NavLinks>
//             </NavItem>
//           </NavMenu>
//         </NavContainer>
//       </Nav>
//     </Fragment>
//   )
// }

// export default Navbars
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/index.css'

function Navbars() {
  return (
    <Navbar className='p-3 navbar' collapseOnSelect expand="lg" fixed='top'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='mx-4' href="/">Home</Nav.Link>
            <Nav.Link className='mx-4' href="/Talkshow">Talkshow</Nav.Link>
            <Nav.Link className='mx-4' href="/Seminar">Seminar</Nav.Link>
            <Nav.Link className='mx-4' href="/Workshop">Workshop</Nav.Link>
            <Nav.Link className='mx-4' href="/Competition">IT Competition</Nav.Link>
            <Nav.Link className='mx-4' href="/Jadwal">Jadwal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;