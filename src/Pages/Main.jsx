import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Filter from '../Components/Filter/Filter';
import Header from '../Components/Header/Header';
import List from '../Components/List/List';
import Search from '../Components/Search/Search';

export default function Main() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const countries = await axios.get('https://restcountries.com/v3.1/all');
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
                    <div className='d-flex justify-content-start col-md-4'>
                        <Search setCountries={setCountries}/>
                    </div>
                    <div className='d-flex justify-content-end col-md-8'>
                        <Filter setCountries={setCountries}/>
                    </div>
                </div>
                <div className='row mt-5'>
                    {countries.length > 0 ? <List countries={countries}/> : console.log("No countries available")}
                </div>
            </div>
        </>
  )
}
