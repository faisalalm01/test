import React from 'react'
import { Col } from 'react-bootstrap'
import SocialIcons from './LandingPage/SocialIcons'

export default function Footer() {
  return (
    <div className='bg-dark'>
        <Col xl={12}>
        <SocialIcons/>
        </Col>
    </div>
  )
}
