import React, { useEffect, useState } from 'react';
import Button from '../Components/Button/Button';
import CountryDetail from '../Components/CountryDetail/CountryDetail';
import Flag from '../Components/Flag/Flag';
import Header from '../Components/Header/Header';
import {useLocation} from "react-router-dom";

function Detail() {

    let location = useLocation();
    const [dataReceived, setDataReceived] = useState(false);

    useEffect(() => {
        setDataReceived(true);
    }, [location])

    return (
        <>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Button 
                            text="Back" 
                            icon={[<ion-icon name="arrow-back-outline" size="large"></ion-icon>]}
                            url="/"
                        />
                    </div>
                    <div className='col-md-6'>
                        { dataReceived ? <Flag url={location.state.url} name={location.state.name}/> : console.log("No location yet")} 
                    </div>
                    <div className='col-md-6'>
                        <CountryDetail 
                            title={location.state.title} 
                            name={location.state.name} 
                            population={location.state.population}
                            region={location.state.region}
                            subregion={location.state.subregion}
                            capital={location.state.capital}
                            topLevelDomain={location.state.topLevelDomain}
                            currencies={location.state.currencies}
                            languages={location.state.languages}
                            borders={location.state.borders}
                        />
                    </div>

                </div>
            </div>
            
        </>
    );
}

export default Detail;