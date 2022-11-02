import React from 'react'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Desseminar() {
  return (
    <div>
      <h1 className="text-center font-weight-bold mt-5">Deskripsi Seminar</h1>

      <div className=" container mt-5 ">
        <Row xs="auto text-center">
          <Col className='p-3' xl={6} sm={6}>
            <Image className='mb-3' src="Assets/Profile.png" roundedCircle />
            <h5>Arif Hidayah</h5>
            <p>undifined</p>
            <p>Talkshow</p>
          </Col>
          <Col className='p-3' xl={6} sm={6}>
            <Image className='mb-3' src="Assets/Profile.png" roundedCircle />
            <h5>Arif Hidayah</h5>
            <p>undifined</p>
            <p>Talkshow</p>
          </Col>
        </Row>
      </div>
      <div className="container">
        <h3 className="mt-5">HTM & FASILITAS</h3>
        <div className="m-sm-4">
          <p>Umum : - </p>
          <p>Mahasiswa : -</p>
          <p>Pembayaran Via Transfer :</p>
          <p>No Rekening -</p>
          {/* <p>sumarti harjo (BRI)</p> */}
          <p>Konfirmasi Pembayaran :</p>
          <p>Wa : - </p>
          <p>Email : -</p>
          <p>Fasilitas : Ilmu & Snack </p>
        </div>
        <h3 className='mt-5'>Contact Person </h3>
        <div className="m-sm-4">
          <p>-</p>
          <p>-</p>
        </div>
      </div>
    </div>
  )
}
