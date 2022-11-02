import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <div className="text-center " style={{color:'white'}}>
                <Row className="bg-dark p-5 about">
                    <Col xl={6} className="text my-4">
                        <h3>Politeknik Harapan Bersama</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit, delectus nulla ab ea doloribus officia rem itaque ullam laborum animi labore maxime facere id dicta libero sint? Error, iusto!
                    </Col>
                    <Col xl={6}>
                        <div className="youtube-code p-5">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hisaD7uhHkw" title="DEDDY CORBUZIER PODCAST BIKIN HIDUP PENUH TEROR!! MENDING BALIK JADI PESULAP DED!!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
