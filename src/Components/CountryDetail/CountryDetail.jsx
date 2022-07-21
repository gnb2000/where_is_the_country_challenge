import React from 'react';
import './CountryDetail'

function CountryDetail(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mb-4'><h3 className='fw-bold'>{props.title}</h3></div>
                <div className='col-md-6'>
                    <p><span className='text-muted fw-bold'>Native Name:</span> {props.name}</p>
                    <p><span className='text-muted fw-bold'>Population:</span> {props.population}</p>
                    <p><span className='text-muted fw-bold'>Region: </span>{props.region}</p>
                    <p><span className='text-muted fw-bold'>Sub Region: </span>{props.subregion}</p>
                    <p><span className='text-muted fw-bold'>Capital: </span>{props.capital}</p>

                </div>
                <div className='col-md-6'>
                    <p><span className='text-muted fw-bold'>Top Level Domain: </span>{props.topLevelDomain}</p>
                    <p><span className='text-muted fw-bold'>Currencies: </span>{props.currencies}</p>
                    <p><span className='text-muted fw-bold'>Languages: </span>{props.languages}</p>
                </div>
                <div className='col-md-12 mt-4'>
                    <p>
                        <span className='text-muted fw-bold me-2'>Border Countries:</span>
                        
                        <button className='btn shadow border-0 px-4'>France</button>
                        <button className='btn shadow border-0 px-4'>France</button>
                        <button className='btn shadow border-0 px-4'>France</button>

                    </p>
                </div>
            </div>
        </div>
    );
}

export default CountryDetail;