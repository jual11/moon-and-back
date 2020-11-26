import React from 'react';
import '../css/Info.css';
import phone from '../pictures/phone.png';
import envelope from '../pictures/envelope.png';
import GoogleMap from './GoogleMap';

const Info = () => {
    return (
        <div className='info-container'>
            <div className='info-wrap'>
                <div className='infoText-container'>
                    <div className='infoTextBox'>
                        <h2 className='infoText-header'>Want Higher?</h2>
                        <p>
                            Before these experiments most physicists
                            believed in an objective, independent
                            universe. They still clung to the assumption
                            that physical states exist in some absolute
                            sense before they are measured.
                        </p>
                    </div>
                    <div className='infoBox-container' >
                        <div className='infoBox'>
                            <h2 className='infoText-header'>CONTACT US</h2>
                            <p className='infoContact-label'>Before these experiments most</p>
                            <div className='infoMail-container'>
                                <img src={envelope} alt='envelope'></img>
                                <p>info@allepal.ee</p>
                            </div>
                            <div className='infoPhone-container'>
                                <img src={phone} alt='phone'></img>
                                <p>+372 65656565</p>
                            </div>
                        </div>
                        <div className='infoBox'>
                            <h2 className='infoText-header'>Location</h2>
                            <p>
                                Allepal OÜ<br/>
                                Pärnu maantee 139 / Kohila 8<br/>
                                11317 Tallinn, Estonia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GoogleMap/>
        </div>
    );
}

export default Info;