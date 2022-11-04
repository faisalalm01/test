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
                <Card.Title className="gold-text"><b>WEB DESIGN COMPETITION</b></Card.Title>
                <Card.Text>
                  Desain web adalah suatu desain tata kelola tampilan konten-konten pada website yang akan ditampilkan
                  kepada client atau penerima informasi melalui world wide web.
                </Card.Text>
              </Card.Body>
            </Button>
          </div>
          <div className="col-md-4 col-sm-12">
            <Button href="/Competition/Lomba2" className="border shadow-lg bg-dark mb-3"
              style={{ height: '100%', width: "100%" }}>
              <Card.Body >
                <Card.Title className="gold-text"><b>VIDEO CREATIVE COMPETITION</b></Card.Title>
                <Card.Text>
                  video kreatif merupakan gambaran serta audio yang termuat di dalamnya.
                </Card.Text>
              </Card.Body>
            </Button>
          </div>
          <div className="col-md-4 col-sm-12">
            <Button href="/Competition/Lomba3" className="border shadow-lg bg-dark mb-3"
              style={{ height: '100%', width: "100%" }}>
              <Card.Body >
                <Card.Title className="gold-text"><b>KARYA TULIS ILMIAH</b></Card.Title>
                <Card.Text>
                  Karya tulis yang dibuat untuk memecahkan suatu permasalahan dengan
                  landasan teori, metode ilmiah, dan contoh metode penulisan karya ilmiah.
                </Card.Text>
              </Card.Body>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
