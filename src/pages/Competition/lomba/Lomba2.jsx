import React from 'react'
import Banner from '../../../components/Competitions/BannerCompetitions'
// import CardJuara2 from '../../../components/Competitions/CardJuara2'
import Deslomba2 from '../../../components/Competitions/Deslomba2'
import Reg2 from '../../../components/Competitions/Reg2'
import Footer from '../../../components/Footer'
import Navbars from '../../../components/Navbar'


export default function Lomba2() {
  return (
      <div>
      <Navbars />
      <Banner />
      <Deslomba2 />
      {/* <CardJuara2 /> */}
      <Reg2 />
      <Footer/>
    </div>
  )
}
