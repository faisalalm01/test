import React from 'react'
import { Button } from 'react-bootstrap'

export default function BannerWorkshop() {
    return (
        <div>
            <div className="card text-bg-dark">
                <img src="/Assets/sur.jpg" className="gambar card-img" alt="..." />
                <div className="judul card-img-overlay text-white text-center">
                    <h1 className="card-title font-weight-bold">Workshop INTERAKTIF</h1>
                    <p className="card-text ">

                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Button href='https://bit.ly/WorkshopInvofest22' className="btn btn-primary" type="button">
                            Daftar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
