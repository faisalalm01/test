import React from 'react'
import Navbars from '../../../components/Navbar'
// import {  Container } from 'react-bootstrap'
// import CardBaner from '../../../components/LandingComponents/CardsBanner'
// import SocialIconst from '../../../components/LandingComponents/SocialIconst'
// import CardJuara3 from '../../../components/Competitions/CardJuara3'
import Reg3 from '../../../components/Competitions/Reg3'
import Footer from '../../../components/Footer'
import BannerCompetition from '../../../components/Competitions/BannerCompetitions'
import Deslomba3 from '../../../components/Competitions/Deslomba3'

export default function Lomba3() {
  return (
      <div>
          <Navbars />
          <BannerCompetition/>
          <Deslomba3 />
          {/* <CardJuara3 /> */}
          <Reg3 />
          <Footer/>
          
          
    </div>
  )
}
