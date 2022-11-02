import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

export default function Guest() {
  return (
    <div className="mt-2">
      <h3>Pengisi Acara</h3>
      <Row xs="auto text-center mt-2">
        <Col className='p-3' xl={7} sm={6}>
          <Image className='mb-3' src="Assets/1.jpg" roundedCircle />
          <h5>hendrawan supcipto</h5>
          <p>Narasumber</p>
          <p>Lorem ipsum dolor sit.</p>
        </Col>
        <Col className='p-3' xl={2} sm={6} >
          <Image className='mb-3' src="Assets/1.jpg" roundedCircle />
          <h5>hendrawan supcipto</h5>
          <p>N  arasumber</p>
          <p>Lorem ipsum dolor sit.</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/1.jpg" roundedCircle />
          <h5>hendrawan supcipto</h5>
          <p>Narasumber</p>
          <p>Lorem ipsum dolor sit.</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/1.jpg" roundedCircle />
          <h5>hendrawan supcipto</h5>
          <p>Narasumber</p>
          <p>Lorem ipsum dolor sit.</p>
        </Col>
        <Col className='p-3' xl={4} sm={12}>
          <Image className='mb-3' src="Assets/1.jpg" roundedCircle />
          <h5>hendrawan supcipto</h5>
          <p>Narasumber</p>
          <p>Lorem ipsum dolor sit.</p>
        </Col>
      </Row>
    </div>
  )
}
