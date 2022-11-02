import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <div className="text-center pt-5 px-5 mt-5" style={{color:'white'}}>
                <Row className="my-5">
                    <Col xl={6} className="text my-4">
                        <h3>Politeknik Harapan Bersama</h3>
                        Jl. Mataram No.9, Kel. pesurungan lor, Kel. Pesurungan Lor,
                        Pesurungan Lor, Margadana, Kota Tegal, Jawa Tengah 52147
                    </Col>
                    <Col xl={6}>
                        <div className="google-map-code">
                       
                        <iframe width="70%" height="70%" src="https://www.youtube.com/embed/hisaD7uhHkw" title="DEDDY CORBUZIER PODCAST BIKIN HIDUP PENUH TEROR!! MENDING BALIK JADI PESULAP DED!!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
