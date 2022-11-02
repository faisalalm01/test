import React from 'react'
import Banner from '../../components/Banner'
import Desseminar from '../../components/Seminar/Desseminar'

import Footer from '../../components/Footer'
import Navbars from '../../components/Navbar'

export default function Seminar() {
  return (
      <div>
          <Navbars />
          <Banner />
          <Desseminar /> 
          <Footer />
    </div>
  )
}