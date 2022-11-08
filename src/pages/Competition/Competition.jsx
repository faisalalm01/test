import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Cards from "../../components/Competitions/Cards";
import CardAcara from "../../components/LandingPage/CardBanner";
import Navbars from "../../components/Navbar";
import Footer from '../../components/Footer'
import Animate from "react-smooth/lib/Animate";
import Particle from "../../components/Particles";


class Competition extends Component {
  render() {
    return (
      <div>
        <Animate to="1" from="0" attributeName="opacity">
          <Particle />
          <Navbars />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col xl={12} className="App-center mt-5">
                <CardAcara />
              </Col>
            </Row>
          </Container>
        </Animate>
        <Cards />
        <footer className="mt-5">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Competition;
