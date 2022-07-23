import React, { useEffect, useState } from 'react';
import './CountryDetail'
import {useLocation} from "react-router-dom";


function CountryDetail() {

    let location = useLocation();
    const [dataReceived, setDataReceived] = useState(false);
    const [currenciesHook,setCurrencies] = useState([]);
    const [languagesHook, setLanguages] = useState([]);
    const [nativeName, setNativeName] = useState("");
    const [borders, setBorders] = useState([]);

    useEffect(() => {
        setDataReceived(true);
        const currencies = location.state.currencies;
        const languages = location.state.languages;
        const name = location.state.name;
        Object.entries(currencies).forEach(([key,value]) => {
            setCurrencies(currenciesHook => [...currenciesHook, value.name]);
        })
        Object.entries(languages).forEach(([key,value]) => {
            setLanguages(languagesHook => [...languagesHook, value]);
        })
        Object.entries(name).forEach(([key,value]) => {
            setNativeName(value.official);
        })
        setBorders(location.state.borders)
    }, [location.state])

    return (
        <div className='container'>
            <div className='row'>
            {
                dataReceived ?
                <>
                    <div className='col-md-12 mb-4'><h3 className='fw-bold'>{location.state.title}</h3></div>
                    <div className='col-md-6'>
                        <p><span className='text-muted fw-bold'>Native Name:</span> {nativeName !== "" ? nativeName : null}</p>
                        <p><span className='text-muted fw-bold'>Population:</span> {location.state.population}</p>
                        <p><span className='text-muted fw-bold'>Region: </span>{location.state.region}</p>
                        <p><span className='text-muted fw-bold'>Sub Region: </span>{location.state.subregion}</p>
                        <p><span className='text-muted fw-bold'>Capital: </span>{location.state.capital}</p>

                    </div>
                    <div className='col-md-6'>
                        <p><span className='text-muted fw-bold'>Top Level Domain: </span>{location.state.topLevelDomain}</p>
                        <p><span className='text-muted fw-bold'>Currencies: </span>{currenciesHook.length > 0 ? currenciesHook.map(c => c + ",") : null/*location.state.currencies*/}</p>
                        <p><span className='text-muted fw-bold'>Languages: </span>{languagesHook.length > 0 ? languagesHook.map(language => language + ", ") : null}</p>
                    </div>
                    <div className='col-md-12 mt-4'>
                        <p>
                        <span className='text-muted fw-bold me-2'>Border Countries:</span>
                        {
                            borders.length > 0 ? borders.map(border => {
                                    return (
                                        <button className='btn shadow border-0 px-4'>{border}</button>
                                    )
                                }): null
                        }
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