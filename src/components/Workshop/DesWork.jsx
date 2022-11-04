import React from 'react'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Deskripsi from '../Deskripsi';

export default function Deswork() {
  return (
    <div>
      <h1 className="text-center font-weight-bold mt-5">Pengisi Workshop</h1>

      <div className=" container mt-5 ">
        <Row xs="auto text-center">
          <Col className='p-3' xl={6} sm={6}>
            <Image className='mb-3' src="Assets/Pengisi_AI.png" roundedCircle />
            <h5>Rusnanda Farhan</h5>
            <p>Data Scientist at Sinbad</p>
            <p>Workshop - Artificial intellegencia</p>
          </Col>
          <Col className='p-3' xl={6} sm={6} >
            <Image className='mb-3' src="Assets/Pengisi_DataSience.png" roundedCircle />
            <h5>Rusnandi Fikri</h5>
            <p>Data Scientist at Telkom Indonesia</p>
            <p>Workshop - Data Science</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/ilham.jpeg" roundedCircle />
            <h5>Ilham Hadif Pamulia</h5>
            <p>undifined</p>
            <p>Workshop - Game dev</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/Dimas.jpeg" roundedCircle />
            <h5>Dimas Shofa Gunarso</h5>
            <p>undifined</p>
            <p>Workshop - Game dev</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/Pengisi_workshop_maulana.png" roundedCircle />
            <h5>Maulana abdul siddiq</h5>
            <p>Undefined</p>
            <p>Workshop - UI/UX</p>
          </Col>
        </Row>
      </div>
      <Deskripsi
        Judul="Workshop Artificial Intelligence"
        Pemateri="Pemateri : Rusnanda Farhan (Data Scientist at Sinbad )"
        Tempat="Tempat  : Gedung D Lt.3 Lab Komputer D1 Politeknik Harapan Bersama Tegal"
        Hari="Hari : Selasa"
        Tanggal="Tanggal : 25 Oktober 2022"
        HTM="HTM  :   200.000"
        contact="08984182517 (Dani)"
      />
      <Deskripsi
        Judul=" Workshop Data Science"
        Pemateri="Pemateri : Rusnandi Fikri (Data Scientist at Telkom Indonesia )"
        Tempat="Tempat  : Gedung D Lt.3 Lab Komputer D2 Politeknik Harapan Bersama Tegal"
        Hari="Hari : Selasa"
        Tanggal="Tanggal : 25 Oktober 2022"
        HTM="HTM  :   200.000"
        contact="089526266192 (Maulana)"
      />
    </div>
  );
}
