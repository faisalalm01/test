import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

export default function Guest() {
  return (
    <div className="mt-2">
      <h3>Pengisi Acara</h3>
      <Row xs="auto text-center mt-2">
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_AI.png" roundedCircle />
          <h5>Rusnanda Farhan</h5>
          <p>Data Scientist at Sinbad</p>
          <p>Workshop - Artificial intellegencia</p>
        </Col>
        <Col className='p-3' xl={3} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_DataSience.png" roundedCircle />
          <h5>Rusnandi Fikri</h5>
          <p>Data Scientist at Telkom Indonesia</p>
          <p>Workshop - Data Science</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Profile.png" roundedCircle />
          <h5>Undefined</h5>
          <p>Undefined</p>
          <p>Undefined</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_workshop_maulana.png" roundedCircle />
          <h5>Maulana abdul siddiq</h5>
          <p>Undefined</p>
          <p>Workshop - UI/UX</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_dhiyo.jpeg" roundedCircle />
          <h5>Dhiya Reksa Kusumojati Brameswanto</h5>
          <p>Undefined</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={3} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_bayu.jpeg" roundedCircle />
          <h5>bayu Prasetyo</h5>
          <p>Undefined</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_nazzul.png" roundedCircle />
          <h5>Nazzul Barri</h5>
          <p>undifined</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={3} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_arif.jpeg" roundedCircle />
          <h5>Arif Hidayah</h5>
          <p>undifined</p>
          <p>Talkshow</p>
        </Col>
      </Row>
    </div>
  )
}
