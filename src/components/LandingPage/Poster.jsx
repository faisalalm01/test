import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Guest from './Guest'

export default function Poster() {
    return (
        <div className="text-center pt-5 px-5 mt-5">
            <Row className="my-5">
                <Col xl={12} className="text my-4">
                    <Guest/>
                </Col>
                {/* <Col xl={6}>
                    <img style={{ width: '60%' }} src="/Assets/PosterUtama.png" alt="" />
                </Col> */}
            </Row>
        </div>
    )
}
