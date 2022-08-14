import axios from 'axios'

const API_URL = "https://restcountries.com/v3.1";

class CountryService {

    getAllCountries(){
        return axios.get(`${API_URL}/all`);
    }

    getCountriesByRegion(region){
        return axios(`${API_URL}/region/${region}`);
    }

    getCountryByName(name){
        return axios.get(`${API_URL}/name/${name}`);
    }


}

export default new CountryService()