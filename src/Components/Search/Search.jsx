import React, { useEffect, useState } from 'react';
import "./Search.css";
import axios from 'axios';
import CountryService from '../../Services/CountryService';


function Search({setCountries}) {

    const [countryInput, setCountryInput] = useState("");
    const [countriesFound, setCountriesFound] = useState([]);

    const handleChange = event => {
        setCountryInput(event.target.value);
    }

    const getCountryByName = async () => {
        try {
            const country = await CountryService.getCountryByName(countryInput);
            setCountriesFound(country.data);
        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        setCountries(countriesFound);
        setCountryInput("");
    },[countriesFound])

    return (
        <div className="input-group search p-2 rounded search shadow">
            <span className="input-group-text border-0 search" onClick={() => getCountryByName()}>
                <ion-icon name="search-outline"></ion-icon>
            </span>
            <input type="search" className="form-control border-0" onChange={handleChange} value={countryInput} placeholder="Search for a country" aria-label="Search" aria-describedby="search-addon" />
        </div>
    );
}

export default Search;