import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Animate from 'react-smooth/lib/AnimateGroup';
import Footer from '../../components/Footer';
import Jadwalacara from '../../components/jadwal/Jadwalacara';
import CardBanner from '../../components/LandingPage/CardBanner';
import Navbars from '../../components/Navbar';
import Particle from '../../components/Particles';

const JadwalPage = () => {
    return (
        <div>
            <Animate/>
            <Particle/>
            <Container className='App-header' fluid={true}>
              <Row className='App-main'>
                <Col xl={12} className='App-center mt-5 shadow-lg'>
                  <CardBanner/>
                </Col>
              </Row>
            </Container>
            <Navbars/>
            <Jadwalacara/>
            <Footer/>
        </div>
    );
}

export default JadwalPage;
