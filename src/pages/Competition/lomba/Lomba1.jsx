import React from "react";
import Banner from "../../../components/Competitions/BannerCompetitions";
// import CardJuara1 from "../../../components/Competitions/CardJuara1";
import Deslomba1 from "../../../components/Competitions/Deslomba1";
import Reg1 from "../../../components/Competitions/Reg1";
import Footer from "../../../components/Footer";
import Navbars from "../../../components/Navbar";

export default function Lomba1() {
  return (
    <div>
      <Navbars />
      <Banner />
      <Deslomba1 />
      {/* <CardJuara1 /> */}
      <Reg1/>
      <Footer/>
    </div>
  );
}
