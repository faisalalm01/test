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
          <p>Umum : Rp 50.000,-</p>
          <p>Mahasiswa : Rp 30.000,-</p>
          <p>Pembayaran Via Transfer :</p>
          <p>No Rekening 6072-01-015533-53-2</p>
          <p>sumarti harjo (BRI)</p>
          <p>Konfirmasi Pembayaran :</p>
          <p>Wa : 0857-3743-932</p>
          <p>Email : inov@gmail.com</p>
          <p>Fasilitas : Ilmu & Snack </p>
        </div>
        <h3 className='mt-5'>Contact Person </h3>
        <div className="m-sm-4">
          <p>Putri Alvina: 0898 6300 090</p>
          <p>Putri Alvina: 0898 6300 090</p>
        </div>
      </div>
    </div>
  );
}
