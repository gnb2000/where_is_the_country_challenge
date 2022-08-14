import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Filter from '../Components/Filter/Filter';
import Header from '../Components/Header/Header';
import List from '../Components/List/List';
import Search from '../Components/Search/Search';
import CountryService from '../Services/CountryService';

export default function Main() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const countries = await CountryService.getAllCountries();
                setCountries(countries.data);
            } catch (err) {
                console.error(err);
            }
        };
        getCountries();
    },[])
    
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-start col-12 col-lg-4'>
                        <Search setCountries={setCountries}/>
                    </div>
                    <div className='d-flex mt-5 mt-lg-0 justify-content-start justify-content-lg-end col-6 col-lg-8'>
                        <Filter setCountries={setCountries}/>
                    </div>
                </div>
                <div className='row mt-5 d-flex justify-content-center'>
                    {countries.length > 0 ? <List countries={countries}/> : <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
                </div>
            </div>
        </>
  )
}
