import React from 'react'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Deswork() {
  return (
    <div>
      <h1 className="text-center font-weight-bold mt-5">Pengisi Workshop</h1>

      <div className=" container mt-5 ">
        <Row xs="auto text-center">
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/Pengisi_AI.png" roundedCircle />
            <h5>Rusnanda Farhan</h5>
            <p>Data Scientist at Sinbad</p>
            <p>Workshop - Artificial intellegencia</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/Pengisi_workshop_maulana.png" roundedCircle />
            <h5>Maulana abdul siddiq</h5>
            <p>Undefined</p>
            <p>Workshop - UI/UX</p>
          </Col>
          <Col className='p-3' xl={4} sm={6} >
            <Image className='mb-3' src="Assets/Pengisi_DataSience.png" roundedCircle />
            <h5>Rusnandi Fikri</h5>
            <p>Data Scientist at Telkom Indonesia</p>
            <p>Workshop - Data Science</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/ilham.jpeg" roundedCircle />
            <h5>Ilham Hadif Pamulia</h5>
            <p>Game Developer</p>
            <p>Workshop - Game dev</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/Dimas.jpeg" roundedCircle />
            <h5>Dimas Shofa Gunarso</h5>
            <p>Game Developer</p>
            <p>Workshop - Game dev</p>
          </Col>
          <Col className='p-3' xl={4} sm={6}>
            <Image className='mb-3' src="Assets/Workshop_TegarPrasetya.jpeg" roundedCircle />
            <h5>Tegar Prasetya</h5>
            <p>Game Developer</p>
            <p>Workshop - Game dev</p>
          </Col>
        </Row>
      </div>
      <div className="container">
        <h3 className="mt-5">HTM & FASILITAS</h3>
        <div className="m-sm-4">
          <p>Umum : (Ada pada deskripsi Form Register)</p>
          <p>Pembayaran Via Transfer :</p>
          <p>- MANDIRI : 1390026107429 (A/N AHMAD FAOZAN) </p>
          <p>- OVO : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>- DANA : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>- SHOPEE PAY : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>- GOPAY : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>Konfirmasi Pembayaran :</p>
          <p>Wa : -</p>
          <p>Email : -</p>
          <p>Fasilitas : Ilmu & Snack </p>
        </div>
        <h3 className='mt-5'>Contact Person </h3>
        <div className="m-sm-4">
          <p>  0823-2390-7128 (Nur Halisah Fasya)  </p>
        </div>
      </div>
    </div>
  )
}