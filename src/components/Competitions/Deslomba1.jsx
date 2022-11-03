import React from 'react'
import { Button } from 'react-bootstrap'

export default function Deslomba1() {
  return (
    <div className='mt-5'>
      <h2 className='text-center container font-weight-bold'> Deskripsi Lomba Web Design</h2>
      <div className="container mt-5">
        <h3 className=' font-weight-bold'>Penjelasan Umum</h3>
        <p>Lorem ipsum dolor
          sit amet consectetur adipisicing elit.
          Officiis ex ullam iste excepturi voluptate vel eaque magnam unde omnis quidem?</p>
        <h3 className=' font-weight-bold'>Penjelasan Lomba </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur, nesciunt dignissimos laborum doloribus ad earum totam repudiandae voluptatibus soluta?
          Illum doloremque ut voluptates quo?
          Minus porro veniam maiores illum eligendi. Voluptates veniam reiciendis maxime eum sequi et ipsa deserunt quo.</p>
        <Button href='https://drive.google.com/file/d/178QWTAcff5A-gP0RrZ56OEPLv4nfrmbN/view?usp=share_link' className='btn btn-primary'>Guide book</Button>

      </div>
    </div>
  )
}
