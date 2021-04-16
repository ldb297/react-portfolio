//import modules
import React from 'react';
import ContactInfo from './ContactInfo';

//import styling
import './styling/MainCard.css'

const MainCard = () => {

    return (
        <>
        <div className="mainCardContainer">
            <div className="mainCardBio">
                Hello! My name is Leo Brooks and I am a Software Engineer from Okinawa, Japan. <br/>
                I am driven by clean engineering architectures and have a passion for innovative prgramming design.
            </div>
            <div className="mainCardLanguageImages">
                here will be those cool language icons to show what proficiencies held
            </div>
            <ContactInfo/>

        </div>
        </>
    )
}

export default MainCard;