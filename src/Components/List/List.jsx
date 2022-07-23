import React from 'react'
import Card from '../Card/Card';


export default function List({countries}) {

    return(
        countries.map( (country, index) => {
            return(
                <div className='d-flex justify-content-center col-12 col-lg-4 pb-5' key={index}>
                    <Card country={country}/>
                </div>
            )
        })
    )
    
}
