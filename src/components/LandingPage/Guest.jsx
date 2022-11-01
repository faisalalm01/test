import React from 'react'
import {Row, Image} from 'react-bootstrap'

export default function Guest() {
  return (
    <div className="container mt-5">
        <Row xs="auto text-center">
            <Image src="Assets/1.jpg" roundedCircle />
            <h5>hendrawan supcipto</h5>
            <p>Narasumber</p>
            <p>Lorem ipsum dolor sit.</p>
            <Image src="Assets/1.jpg" roundedCircle />
            <h5>hendrawan supcipto</h5>
            <p>Narasumber</p>
            <p>Lorem ipsum dolor sit.</p>
        </Row>
      </div>
  )
}
