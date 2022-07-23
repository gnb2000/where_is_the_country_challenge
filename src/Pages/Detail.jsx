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
                        { dataReceived ? <Flag url={location.state.country.flags.png} name={location.state.country.name.common}/> : console.log("No location yet")} 
                    </div>
                    <div className='col-md-6'>
                        <CountryDetail 
                            country={location.state.country}
                        />
                    </div>

                </div>
            </div>
            
        </>
    );
}

export default Detail;