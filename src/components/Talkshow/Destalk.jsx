import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Destalk() {
  return (
    <div>
      <h1 className="text-center font-weight-bold mt-5">Deskripsi Talkshow</h1>
      <div className=" container mt-5 ">
        <Row className  ="auto text-center">
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_dhiyo.jpeg" roundedCircle />
          <h5>Undefined</h5>
          <p>Undefined</p>
          <p>Undefined</p>
        </Col>
        <Col className='p-3' xl={3} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_bayu.jpeg" roundedCircle />
          <h5>Undefined</h5>
          <p>Undefined</p>
          <p>Undefined</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_nazzul.png" roundedCircle />
          <h5>Undifined</h5>
          <p>undifined</p>
          <p>undifined</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_arif.jpeg" roundedCircle />
          <h5>Undifined</h5>
          <p>undifined</p>
          <p>undifined</p>
        </Col>
        </Row>
      </div>
      <div className="container">
        <h3 className="mt-5">HTM & FASILITAS</h3>
        <div className="m-sm-4">
          <p>Umum : -</p>
          <p>Mahasiswa : -</p>
          <p>Pembayaran Via Transfer :</p>
          <p>No Rekening -</p>
          {/* <p>sumarti harjo (BRI)</p> */}
          <p>Konfirmasi Pembayaran :</p>
          <p>Wa : -</p>
          <p>Email : -</p>
          <p>Fasilitas : Ilmu & Snack </p>
        </div>
        <h3 className='mt-5'>Contact Person </h3>
        <div className="m-sm-4">
          <p> - </p>
          <p> - </p>
        </div>
      </div>
    </div>
  );
}
