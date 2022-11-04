import React from 'react'
import Banner from '../../components/Banner'
// import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Navbars from '../../components/Navbar'
// import BannerWorkshop from '../../components/Workshop/BannerWorkshop'
import Deswork from '../../components/Workshop/DesWork'

export default function Workshop() {
  return (
    <div>
       <Navbars />
       <Banner/>
       <Deswork/>
       <Footer/> 
    </div>
  )
}
