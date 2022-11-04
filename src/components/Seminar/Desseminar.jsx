import React from 'react'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Desseminar() {
  return (
    <div>
      <h1 className="text-center font-weight-bold mt-5">Pengisi Seminar</h1>

      <div className=" container mt-5 ">
        <Row xs="auto text-center">
          <Col className='p-3' xl={6} sm={6}>
            <Image className='mb-3' src="Assets/salwa.jpeg" roundedCircle />
            <h5>Salwa Ziada Salsabilla</h5>
            <p>CEO at Central AI</p>
            <p>Seminar - </p>
          </Col>
          <Col className='p-3' xl={6} sm={6} >
            <Image className='mb-3' src="Assets/seminar_Supatno.jpeg" roundedCircle />
            <h5>Supatmo Cahyono</h5>
            <p>UI/UX Designer Lead Kitabisa</p>
            <p>Seminar</p>
          </Col>
        </Row>
      </div>
      <div className="container">
        <h3 className="mt-5">HTM & FASILITAS</h3>
        <div className="m-sm-4">
          <p>Umum : 50.000,- </p>
          {/* <p>Mahasiswa : -</p> */}
          <p>Pembayaran Via Transfer :</p>
          <p>- MANDIRI : 1390026107429 (A/N AHMAD FAOZAN) </p>
          <p>- OVO : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>- DANA : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>- SHOPEE PAY : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>- GOPAY : 0821 3576 4818 (A/N AHMAD FAOZAN)</p>
          <p>Konfirmasi Pembayaran:</p>
          <p>Wa : - </p>
          <p>email : - </p>
          <h3>Contact Person</h3>
          <p> 0877-4994-3994 (Anggit Rief)</p>
        </div>
      </div>
    </div>
  )
}
