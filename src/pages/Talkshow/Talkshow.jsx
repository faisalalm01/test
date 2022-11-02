import React, { Component } from "react";
// import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbar";
import BannerTalksow from "../../components/Talkshow/BannerTalksow";
import Destalk from "../../components/Talkshow/Destalk";

export default class Talkshow extends Component {
  render() {
    return (
      <div>
        <div id="Talkshow">
        < Navbars/>
        <BannerTalksow />
        </div>
        <Destalk/>
        <Footer/>
      </div>
    );
  }
}
