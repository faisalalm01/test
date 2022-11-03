import React from 'react'
// import Banner from '../../components/Banner'
import Desseminar from '../../components/Seminar/Desseminar'

import Footer from '../../components/Footer'
import Navbars from '../../components/Navbar'
import BannerSeminar from '../../components/Seminar/BannerSeminar'

export default function Seminar() {
  return (
      <div>
          <Navbars />
          <BannerSeminar />
          <Desseminar /> 
          <Footer />
    </div>
  )
}