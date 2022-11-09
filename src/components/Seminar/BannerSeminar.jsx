import React from 'react'
import { Button } from 'react-bootstrap'

export default function BannerSeminar() {
  return (
    <div>
      <div className="card text-bg-dark">
        <img src="/Assets/sur.jpg" className="gambar card-img" alt="..." />
        <div className="judul card-img-overlay text-white text-center">
          <h1 className="card-title font-weight-bold">SEMINAR INTERAKTIF</h1>
          <p className="card-text ">
            Seminar nasional dengan tema Artificial Intelegence dalam Transformasi Teknologi Industri Masa Depan.
          </p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Button href='https://bit.ly/SEMINARTALKSHOW2022' className="btn btn-primary" type="button">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
