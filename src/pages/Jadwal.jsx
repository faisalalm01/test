import React from 'react'
// import BannerCompetition from '../components/Competitions/BannerCompetitions'
import Footer from '../components/Footer'
import Navbars from '../components/Navbar'
import Timeline from '../components/Timeline'
import CardBanner from '../components/LandingPage/CardBanner'
import Animate from 'react-smooth/lib/Animate'
import Particle from '../components/Particles'
import { Row, Col, Container } from 'react-bootstrap'

export default function Jadwal() {
  return (
    <div>
        <Animate to="1" from="0" attributeName="opacity">
          <header>
            <Particle />
            <Navbars />
            <Container className='App-header' fluid={true}>
              <Row className='App-main'>
                <Col xl={12} className='App-center mt-5 shadow-lg'>
                  <CardBanner />
                </Col>
              </Row>
            </Container>
          </header>
          </Animate>
        {/* <BannerCompetition /> */}
        <Timeline/>
        <Footer/>
    </div>
  )
}
