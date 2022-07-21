import React from 'react';
import Button from '../Components/Button/Button';
import CountryDetail from '../Components/CountryDetail/CountryDetail';
import Flag from '../Components/Flag/Flag';
import Header from '../Components/Header/Header';

function Detail({url, name}) {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Button 
                            text="Back" 
                            icon={[<ion-icon name="arrow-back-outline" size="large"></ion-icon>]}
                        />
                    </div>
                    <div className='col-md-6'>
                        <Flag url={url} name={name}/>
                    </div>
                    <div className='col-md-6'>
                        {/*<CountryDetail title={props.country}/>*/}
                    </div>

                </div>
            </div>
            
        </>
    );
}

export default Detail;