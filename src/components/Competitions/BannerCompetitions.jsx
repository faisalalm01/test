import React, { Component } from "react";


export default class BannerCompetition extends Component {
  render() {
    return (
      <div>
        <div className="card text-bg-dark">
          <img src="/Assets/sur.jpg" className="gambar card-img" alt="..." />
          <div className="judul card-img-overlay text-white text-center">
            <h1 className="card-title font-weight-bold">DAFTAR LOMBA</h1>
            {/* <p className="card-text ">

              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p> */}
            <div className="d-grid gap-2 col-6 mx-auto">
              <a type="button" className="btn btn-primary" href="/">
                Daftar Lomba
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
