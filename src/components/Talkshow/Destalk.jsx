import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Destalk() {
  return (
    <div>
      <h1 className="text-center font-weight-bold mt-5">Pengisi Talkshow</h1>
      <div className=" container mt-5 ">
        <Row className="auto text-center">
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_dhiyo.jpeg" roundedCircle />
          <h5>Dhiya Reksa Kusumojati Brameswanto</h5>
          <p>Frontend Developer Maxxi Tani</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={3} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_bayu.jpeg" roundedCircle />
          <h5>Bayu Adi Prasetyo</h5>
          <p>Lead Software Development at Harian Kompas</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_nazzul.png" roundedCircle />
          <h5>Nazzul Barri</h5>
          <p>Software Engineer at PT. NOCOLA IoT SOLUTION</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_arif.jpeg" roundedCircle />
          <h5>Arif Hidayah</h5>
          <p>Web Developer at Dinas Sosial</p>
          <p>Talkshow</p>
        </Col>
        </Row>
      </div>
      <div className="container">
        <h3 className="mt-5">HTM & FASILITAS</h3>
        <div className="m-sm-4">
          <p>Umum : 30.000,-</p>
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
  );
}
