import React from 'react'

export default function Deskripsi(props) {
  return (
        <div className="container">
        
          <h5>{props.Judul} </h5>
        <div className="m-sm-4">
          
          <p>{props.Pemateri}</p>
          <p>
           {props.Tempat}
          </p>
          <p>{props.Hari}</p>
          {/* <p>sumarti harjo (BRI)</p> */}
          <p>{props.Tanggal}</p>
          <p>{props.Waktu} </p>
          {/* <p>Email : -</p>
          <p>Fasilitas : Ilmu & Snack </p> */}
          <p>{props.HTM}</p>
        <h5 >Contact Person</h5>
          <p> {props.contact} </p>
        </div>
    </div>
  )
}