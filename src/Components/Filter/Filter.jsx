import React, { useEffect, useState } from 'react'
import "./Filter.css";
import axios from 'axios';
import CountryService from '../../Services/CountryService';


export default function Filter(props) {

  const [regionSelected, setRegionSelected] = useState("default");

  const handleChange = event => {
    setRegionSelected(event.target.value);
  }

  useEffect(() => {
    const countries = async () => {
      const request = await CountryService.getCountriesByRegion(regionSelected);
      props.setCountries(request.data)
      setRegionSelected("default");
    }

    if(regionSelected != "default"){
      countries();
    }
  },[regionSelected])

  

  return (
    <div>
        <select className="form-select border-0 py-3 rounded shadow" value={regionSelected} onChange={handleChange}>
            <option value="default">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}
