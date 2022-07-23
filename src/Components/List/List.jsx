import React from 'react'
import Card from '../Card/Card';


export default function List({countries}) {

    return(
        countries.map(country => {
            return(
                <div className='col-md-4 pb-5' key={country.official}>
                    <Card 
                        title={country.name.common}
                        name={country.name.nativeName}
                        population={country.population} 
                        region={country.region} 
                        subregion={country.subregion}
                        capital={country.capital} 
                        topLevelDomain={country.tld}
                        currencies={country.currencies}
                        languages={country.languages}
                        url={country.flags.png}
                        borders={country.borders}
                        />
                </div>
            )
        })
    )
    
}
