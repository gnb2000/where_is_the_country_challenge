import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export default function Card(props) {
  
  return (
      <Link 
        to={"/detail"}
        style={{ textDecoration: 'none' }}
        state= {{
          title: props.title,
          name: props.name,
          region: props.region,
          population: props.population,
          subregion: props.region,
          capital: props.capital,
          topLevelDomain: props.topLevelDomain,
          currencies: props.currencies,
          languages: props.languages,
          url: props.url

        }}>
        <div className="card pb-4 h-100">
            <img src={props.url} className="card-img-top" alt={props.country}/>
            <div className="card-body">
                <h5 className="card-title"><strong>{props.title}</strong></h5>
                <p className="card-text m-0 text-muted fw-bold">Population: {props.population}</p>
                <p className="card-text m-0 text-muted fw-bold">Region: {props.region}</p>
                <p className="card-text m-0 text-muted fw-bold">Capital: {props.capital}</p>
            </div>
        </div>
      </Link>
      
    
    
  )
}
