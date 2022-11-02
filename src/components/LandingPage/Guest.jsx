import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

export default function Guest() {
  return (
    <div className="mt-2">
      <h3>Pengisi Acara</h3>
      <Row xs="auto text-center mt-2">
        <Col className='p-3' xl={7} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_AI.png" roundedCircle />
          <h5>Rusnanda Farhan</h5>
          <p>Data Scientist at Sinbad</p>
          <p>Workshop</p>
        </Col>
        <Col className='p-3' xl={2} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_DataSience.png" roundedCircle />
          <h5>Rusnandi Fikri</h5>
          <p>Data Scientist at Telkom Indonesia</p>
          <p>Workshop</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Profile.png" roundedCircle />
          <h5>Undifined</h5>
          <p>undifined</p>
          <p>undifined</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Profile.png" roundedCircle />
          <h5>Undifined</h5>
          <p>undifined</p>
          <p>undifined</p>
        </Col>
        <Col className='p-3' xl={4} sm={12}>
          <Image className='mb-3' src="Assets/Profile.png" roundedCircle />
          <h5>Undifined</h5>
          <p>undifined</p>
          <p>undifined</p>
        </Col>
      </Row>
    </div>
  )
}
