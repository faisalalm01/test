import React from 'react'
import { Row, Col } from 'react-bootstrap'


export default function Lokasi() {
    return (   
            <div className="text-center pt-5 px-5 mt-5">
                <h3>Lokasi</h3>
                <Row className="my-5">
                    <Col xl={6} className="text my-5">
                        <h3>Politeknik Harapan Bersama</h3>
                        <p style={{fontSize:'20px'}}>
                         Jl. Mataram No.9, Kel. pesurungan lor, Kel. Pesurungan Lor,
                        Pesurungan Lor, Margadana, Kota Tegal, Jawa Tengah 52147
                        </p>
                    </Col>
                    <Col xl={6}>
                        <div className="google-map-code">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.517661957221!2d109.10457342636109!3d-6.868657552651337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama!5e0!3m2!1sid!2sid!4v1661408853023!5m2!1sid!2sid" width="100%" height="400" title='peta phb' style={{
                                border: 0, borderRadius: 15,
                                borderColor: 'black'
                            }}
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
    )
}
