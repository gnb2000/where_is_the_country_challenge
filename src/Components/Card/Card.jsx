import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export default function Card({country}) {

  
  return (
      <Link 
        to={"/detail"}
        style={{ textDecoration: 'none' ,color: 'inherit'}}
        state= {{
          country: country
        }}>
        <div className="card pb-4 h-100">
            <img src={country.flags.png} className="card-img-top" alt={country.name.common}/>
            <div className="card-body">
                <h5 className="card-title"><strong>{country.name.common}</strong></h5>
                <p className="card-text m-0 text-muted"><strong>Population:</strong> {country.population}</p>
                <p className="card-text m-0 text-muted"><strong>Region:</strong> {country.region}</p>
                <p className="card-text m-0 text-muted"><strong>Capital:</strong> {country.capital}</p>
            </div>
        </div>
      </Link>
      
    
    
  )
}
