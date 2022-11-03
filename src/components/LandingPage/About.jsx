import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <div className="text-center " style={{ color: 'white' }}>
                <Row className="bg-dark p-5 about">
                    <Col xl={6} className="text my-5">
                        <h3>INVOFEST ?</h3>
                        <p style={{ fontSize: '20px' }}>event spektakuler tahunan yang bernama Invofest (Informatics Vocational Festival), di mana kegiatan ini dapat memfasilitasi potensi yang dimiliki mahasiswa dalam mengembangkan dan menyalurkan kemampuan di bidang IT. Invofest (Informatics Vocational Festival) adalah suatu wadah pengembangan kreativitas dan inovasi, serta peningkatan ilmu pengetahuan dan teknologi dalam sebuah pembelajaran guna mengarahkan mahasiswa mencapai taraf kreativitas dan inovasi. Dengan adanya Invofest ini, diharapkan mahasiswa mampu menguasai teknologi, mengasah kemampuan di bidang IT dan meningkatkan daya kompetisi di dunia IT.
                            Salah satu kemajuan di dunia IT adalah penerapan teknologi dibidang kewirausahaan. Kewirausahaan di tengah perkembangan society 5.0 di mana semua berbasis teknologi internet, kini teknologi menjadi bagian sangat penting yang tak terpisahkan bagi kehidupan manusia atau masyarakat baik untuk pendidikan, bersosialisasi ataupun berbisnis melalui layanan internet yang saat ini sangat mendorong tingginya pertumbuhan ekonomi. </p>
                    </Col>
                    <Col xl={6}>
                        <div className="youtube-code p-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hisaD7uhHkw" title="DEDDY CORBUZIER PODCAST BIKIN HIDUP PENUH TEROR!! MENDING BALIK JADI PESULAP DED!!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
