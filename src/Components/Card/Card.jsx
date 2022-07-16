import React from 'react'
import "./Card.css"

export default function Card() {
  return (
    <div className="card pb-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title"><strong>Argentina</strong></h5>
            <p className="card-text m-0 text-muted fw-bold">Population: </p>
            <p className="card-text m-0 text-muted fw-bold">Region: </p>
            <p className="card-text m-0 text-muted fw-bold">Capital: </p>
        </div>
    </div>
  )
}
