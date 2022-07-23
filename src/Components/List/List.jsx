import React from 'react'
import Card from '../Card/Card';


export default function List({countries}) {

    return(
        countries.map(country => {
            return(
                <div className='col-md-4 pb-5' key={country.official}>
                    <Card country={country}/>
                </div>
            )
        })
    )
    
}
