import React from 'react';

import './styling/AboutMe.css';

import LanguageInfo from './LanguageInfo';
import ContactInfo from './ContactInfo';

import bioImage from './styling/bioImage.png';

const AboutMe = () => {

    return (
        <>
            <div className="aboutMeQuoteText">`driven by clean engineering architectures`</div>
            
            <div className="aboutMeBioContainer">
                <div className="aboutMeImageContainer">
                    <img id="picOfMe" src={bioImage} alt="photograph of me"/>
                </div>

                <textarea className="aboutMeTextContainer" disabled>
                    Dominant in ES6, JS frameworks, and Python, I strive to build intuitive solutions for the complex problems of tomorrow. My biggest weakness is not being able to accurately measure my own strengths. My biggest strength is being able to see the weaknesses in my teammates and approach them with thoughtful and constructive advice with a pressureless demeanor. In my free time I enjoy trail-running, reading science fiction non-fiction, studying theoretical scientific texts, exploring my culinary creativity, and working through my Super Ultimate 12 sudoku book. Thank you for taking the time to visit my portfolio, I hope you've enjoyed your visit.
                </textarea>
            </div>
            
            <ContactInfo/>
            <LanguageInfo/>
            <div className="aboutMeQuoteText">`passionate about innovative programming design`</div>
        </>
    )
}

export default AboutMe;