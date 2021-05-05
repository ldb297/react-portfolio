import React from 'react';

import './styling/AboutMe.css';

import LanguageInfo from './LanguageInfo';
import ContactInfo from './ContactInfo';

import bioImage from './styling/bioImage.png';

const AboutMe = () => {

    return (
        <>
            <div className="aboutMeQuoteText">`driven by clean engineering architecture`</div>
            
            <div className="aboutMeBioContainer">
                <div className="aboutMeImageContainer">
                    <img id="picOfMe" src={bioImage} alt="photograph of me"/>
                </div>
                <div className="aboutMeRightContainer">
                    <div className="aboutMeTextContainer">
                        Dominant in ES6, JS frameworks, and Python, I strive to build intuitive solutions for the complex problems of tomorrow. 
                        <br/><br/>
                        My biggest weakness is not being able to accurately measure my own strengths. I struggle to accept praise, so I have a tendency to overcompensate for this inability by over working myself at times. I'm working on improving this by being more vulnerable to positive reinforcement.
                        <br/><br/>
                        My biggest strength is being able to see the weaknesses in my teammates and approach them with thoughtful and constructive advice with a pressureless demeanor. I've often been praised by colleagues as empathetic and understanding of every situation, regardless of relatability. 
                        <br/><br/>
                        In my free time I enjoy trail-running and long distance road running. I also like leisurely reading science fiction non-fiction books, news articles, and theoretical scientific texts. If I'm not running or reading, I can also be found exploring my culinary creativity or working through my Super Ultimate 12 sudoku book (it's currently kicking my butt lol but i'm determined to beat it! (*•̀ᴗ•́*)و ̑̑). 
                        <br/><br/>
                        Thank you for taking the time to visit my portfolio, I hope you've enjoyed your visit.
                    </div>
                    <div id="emailText">
                        email: ldbrooks297@gmail.com
                    </div>
                </div>
            </div>
            
            <ContactInfo/>
            <LanguageInfo/>
            <div className="aboutMeQuoteText">`passionate about innovative programming design`</div>
        </>
    )
}

export default AboutMe;