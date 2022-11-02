import React from 'react'
import '../LandingPage/index.css'
import {
    Col,
   } from 'react-bootstrap';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
   

export default function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
    <a href="https://invofest@gmail.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="fb" icon={faFacebook} />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="git" icon={faYoutube} />
    </a>
    <a data-toggle='tooltip-bottom' title='instagram' href="/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="insta" icon={faInstagram} />
    </a>
   </Col>   
  )
}
