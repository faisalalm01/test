import React from 'react'
import Navbars from '../../../components/Navbar'
import {  Container } from 'react-bootstrap'
// import CardBaner from '../../../components/LandingComponents/CardsBanner'
// import SocialIconst from '../../../components/LandingComponents/SocialIconst'
import Deslomba2 from '../../../components/Competitions/Deslomba3'
import CardJuara3 from '../../../components/Competitions/CardJuara3'
import Reg3 from '../../../components/Competitions/Reg3'
import Footer from '../../../components/Footer'

export default function Lomba3() {
  return (
      <div>
          <Navbars />
          <Container className="App-header" fluid={true}>
            {/* <Row className="App-main">
              <Col  xl={12}  className="App-center mt-5">
                <CardBaner/>
              </Col>
                <SocialIconst/>
            </Row> */}
        </Container>
          <Deslomba2 />
          <CardJuara3 />
          <Reg3 />
          <Footer/>
          
          
    </div>
  )
}
