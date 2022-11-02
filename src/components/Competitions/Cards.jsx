import React from "react";
import { Card, Row, Button, Container } from "react-bootstrap";


export default function Cards() {
  return (
    <div className="mt-5">
      <Container className="text-center">
        <h1 className="mt-5 text-center">IT Competition Invofest 2022</h1>
        <Row className="text-center pt-5">
          <div className="col-md-4 col-sm-12">
            <Button href="/Competition/Lomba1" className="border shadow-lg bg-dark mb-3"
              style={{ height: '100%', width: "100%" }}>
              <Card.Body >
                <Card.Title className="gold-text">Web Design Competition</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Button>
          </div>
          <div className="col-md-4 col-sm-12">
            <Button href="/Competition/Lomba2" className="border shadow-lg bg-dark mb-3"
              style={{ height: '100%', width: "100%" }}>
              <Card.Body >
                <Card.Title className="gold-text">Video Creative Competition</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Button>
          </div>
          <div className="col-md-4 col-sm-12">
            <Button href="/Competition/Lomba3" className="border shadow-lg bg-dark mb-3"
              style={{ height: '100%', width: "100%" }}>
              <Card.Body >
                <Card.Title className="gold-text">Karya Tulis Ilmiah</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
