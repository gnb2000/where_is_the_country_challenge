import React, { useEffect, useState } from 'react';
import './CountryDetail'
import {useLocation} from "react-router-dom";


function CountryDetail() {

    let location = useLocation();
    const [dataReceived, setDataReceived] = useState(false);

    useEffect(() => {
        setDataReceived(true);
        let currencies = location.state.currencies;
        Object.entries(currencies).forEach(([key,value]) => {
            console.log(value.name)
        })
    }, [location])

    return (
        <div className='container'>
            <div className='row'>
            {
                dataReceived ?
                <>
                    <div className='col-md-12 mb-4'><h3 className='fw-bold'>{location.state.title}</h3></div>
                    <div className='col-md-6'>
                        <p><span className='text-muted fw-bold'>Native Name:</span> {location.state.name}</p>
                        <p><span className='text-muted fw-bold'>Population:</span> {location.state.population}</p>
                        <p><span className='text-muted fw-bold'>Region: </span>{location.state.region}</p>
                        <p><span className='text-muted fw-bold'>Sub Region: </span>{location.state.subregion}</p>
                        <p><span className='text-muted fw-bold'>Capital: </span>{location.state.capital}</p>

                    </div>
                    <div className='col-md-6'>
                        <p><span className='text-muted fw-bold'>Top Level Domain: </span>{location.state.topLevelDomain}</p>
                        <p><span className='text-muted fw-bold'>Currencies: </span>{/*location.state.currencies*/}</p>
                        <p><span className='text-muted fw-bold'>Languages: </span>{location.state.languages}</p>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <p>
                            <span className='text-muted fw-bold me-2'>Border Countries:</span>
                            <button className='btn shadow border-0 px-4'>France</button>
                            <button className='btn shadow border-0 px-4'>France</button>
                            <button className='btn shadow border-0 px-4'>France</button>

                        </p>
                    </div>
                </> 
                : null
            }
                
            </div> 
        </div>
    );
}

export default CountryDetail;