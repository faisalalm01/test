import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Particles from "react-tsparticles";
import Cards from "../../components/Competitions/Cards";
import CardAcara from "../../components/LandingPage/CardBanner";
import Navbars from "../../components/Navbar";
import Footer from '../../components/Footer'


class Competition extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Particles />
        <Container className="App-header" fluid={true}>
          <Row className="App-main">
            <Col xl={12} className="App-center mt-5">
              <CardAcara />
            </Col>
          </Row>
        </Container>
        <Cards />
        <footer className="mt-5">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Competition;
