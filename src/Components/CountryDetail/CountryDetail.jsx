import React, { useEffect, useState } from 'react';
import './CountryDetail'
import {useLocation} from "react-router-dom";


function CountryDetail() {

    let location = useLocation();
    const [dataReceived, setDataReceived] = useState(false);
    const [currenciesHook,setCurrencies] = useState([]);
    const [languagesHook, setLanguages] = useState([]);
    const [nativeName, setNativeName] = useState("");

    useEffect(() => {
        setDataReceived(true);
        const currencies = location.state.country.currencies;
        const languages = location.state.country.languages;
        const name = location.state.country.name.nativeName;
        Object.entries(currencies).forEach(([key,value]) => {
            setCurrencies(currenciesHook => [...currenciesHook, value.name]);
        })
        Object.entries(languages).forEach(([key,value]) => {
            setLanguages(languagesHook => [...languagesHook, value]);
        })
        Object.entries(name).forEach(([key,value]) => {
            setNativeName(value.official);
        })
    }, [location.state])

    return (
        <div className='container'>
            <div className='row'>
            {
                dataReceived ?
                <>
                    <div className='col-md-12 mb-4'><h3 className='fw-bold'>{location.state.country.name.common}</h3></div>
                    <div className='col-md-6'>
                        <p><span className='text-muted fw-bold'>Native Name:</span> {nativeName}</p>
                        <p><span className='text-muted fw-bold'>Population:</span> {location.state.country.population}</p>
                        <p><span className='text-muted fw-bold'>Region: </span>{location.state.country.region}</p>
                        <p><span className='text-muted fw-bold'>Sub Region: </span>{location.state.country.subregion}</p>
                        <p><span className='text-muted fw-bold'>Capital: </span>{location.state.country.capital}</p>

                    </div>
                    <div className='col-md-6'>
                        <p><span className='text-muted fw-bold'>Top Level Domain: </span>{location.state.country.tld[0]}</p>
                        <p><span className='text-muted fw-bold'>Currencies: </span>{currenciesHook.length > 0 ? 
                            currenciesHook.map( (c,index) => {
                                if (index == (currenciesHook.length - 1))
                                    return c
                                return c + ","
                            }) 
                            : null}</p>
                        <p><span className='text-muted fw-bold'>Languages: </span>{languagesHook.length > 0 ? 
                                languagesHook.map( (language,index) => {
                                    if (index == (languagesHook.length -1))
                                        return language
                                    return language + ","
                                })
                            : null}</p>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <p>
                        <span className='text-muted fw-bold me-2'>Border Countries:</span>
                        {dataReceived ? location.state.country.borders.map(border => {
                            return <button className='btn shadow border-0 px-4'>{border}</button>
                        }): null}
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