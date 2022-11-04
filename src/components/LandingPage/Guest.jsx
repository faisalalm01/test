import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

export default function Guest() {
  return (
    <div className="mt-2">
      <h3>Pengisi Acara</h3>
      <Row xs="auto text-center mt-2">
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_AI.png" roundedCircle />
          <h5>Rusnanda Farhan</h5>
          <p>Data Scientist at Sinbad</p>
          <p>Workshop - Artificial intellegencia</p>
        </Col>
        <Col className='p-3' xl={4} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_DataSience.png" roundedCircle />
          <h5>Rusnandi Fikri</h5>
          <p>Data Scientist at Telkom Indonesia</p>
          <p>Workshop - Data Science</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_workshop_maulana.png" roundedCircle />
          <h5>Maulana abdul siddiq</h5>
          <p>UI/UX Designer Stockbit & Bibit.id</p>
          <p>Workshop - UI/UX</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_dhiyo.jpeg" roundedCircle />
          <h5>Dhiya Reksa Kusumojati Brameswanto</h5>
          <p>Frontend Developer Maxxi Tani</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={4} sm={6} >
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_bayu.jpeg" roundedCircle />
          <h5>Bayu Adi Prasetyo</h5>
          <p>Lead Software Development at Harian Kompas</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_nazzul.png" roundedCircle />
          <h5>Nazzul Barri</h5>
          <p>Software Engineer at PT. NOCOLA IoT SOLUTION</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Pengisi_Talkshow_arif.jpeg" roundedCircle />
          <h5>Arif Hidayah</h5>
          <p>Web Developer at Dinas Sosial</p>
          <p>Talkshow</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/ilham.jpeg" roundedCircle />
          <h5>Ilham Hadif Pamulia</h5>
          <p>Game Developer</p>
          <p>Workshop - Game dev</p>
        </Col>
        <Col className='p-3' xl={4} sm={6}>
          <Image className='mb-3' src="Assets/Dimas.jpeg" roundedCircle />
          <h5>Dimas Shofa Gunarso</h5>
          <p>Game Developer</p>
          <p>Workshop - Game dev</p>
        </Col>
        <Col className='p-3' xl={6} sm={6} >
          <Image className='mb-3' src="Assets/seminar_Supatno.jpeg" roundedCircle />
          <h5>Supatmo Cahyono</h5>
          <p>UI/UX Designer Lead Kitabisa</p>
          <p>Seminar</p>
        </Col>
        <Col className='p-3' xl={6} sm={12}>
          <Image className='mb-3' src="Assets/salwa.jpeg" roundedCircle />
          <h5>Salwa Ziada Salsabilla</h5>
          <p>CEO at Central AI</p>
          <p>Seminar </p>
        </Col>
      </Row>
    </div>
  )
}
