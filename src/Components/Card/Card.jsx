import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className="card pb-4 h-100">
        <img src={props.url} className="card-img-top" alt={props.country}/>
        <div className="card-body">
            <h5 className="card-title"><strong>{props.country}</strong></h5>
            <p className="card-text m-0 text-muted fw-bold">Population: {props.population}</p>
            <p className="card-text m-0 text-muted fw-bold">Region: {props.region}</p>
            <p className="card-text m-0 text-muted fw-bold">Capital: {props.capital}</p>
        </div>
    </div>
  )
}
