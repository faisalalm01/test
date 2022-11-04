import React from "react";
import { Button } from "react-bootstrap";

export default function Banner(props) {
  return (
    <div>
      <div className="card text-bg-dark">
        <img src={props.banner} className="gambar card-img" alt="..." />
        <div className="judul card-img-overlay text-white text-center">
          <h1 className="card-title font-weight-bold">{props.Judul} </h1>
          <p className="card-text ">{props.summary}</p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Button href={props.link} className="btn btn-primary" type="button">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
