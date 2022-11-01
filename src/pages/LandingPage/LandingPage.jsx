import React, { Component } from 'react'
import '../LandingPage/index.css'
import { Col, Container, Row } from 'react-bootstrap'
import Animate from 'react-smooth/lib/Animate'
import CardAcara from '../../components/LandingPage/CardAcara'
import CardBanner from '../../components/LandingPage/CardBanner'
import Particle from '../../components/Particles'
import Lokasi from '../../components/LandingPage/Lokasi'
import Footer from '../../components/Footer'
import Navbars from '../../components/Navbar'
import Poster from '../../components/LandingPage/Poster'
import About from '../../components/LandingPage/About'

export default class LandingPage extends Component {
  render() {
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
          <main className='mt-5'>
            <CardAcara />
            <div>
              <Poster/>
            </div>
            <div className='bg-dark'>
             <About/>
            </div>
            <div>
              <Col xl={12}>
                <Lokasi />
              </Col>
            </div>
          </main>
          <footer>
              <Footer />
          </footer>
        </Animate>
      </div>
    )
  }
}
