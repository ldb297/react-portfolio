import React from 'react';

//styling
import './styling/Projects.css'

//image imports
// import p1code from './styling/images/p1code.png';
import p1live from './styling/images/p1live.png';
// import p2code from './styling/images/p2code.png';
import p2live from './styling/images/p2live.png';
// import p3back from './styling/images/p3back.png';
// import p3front from './styling/images/p3front.png';
import p3live from './styling/images/p3live.png';
// import p4back from './styling/images/p4back.png';
// import p4front from './styling/images/p4front.png';
import p4live from './styling/images/p4live.png';

const Projects = () => {

    return (
        <>
        <div className="mainProjectContainer">
            {/* flex column*/}

            <div className="projectDisplayContainer" id="projectFour">
                <span className="projectTitle">Nutrifit Tracker</span>
                <span className="projectTechnologies">Django/Python/PostgreSQL</span>
                <div className="projectImage">
                    {/* <div className="twoImages">
                        <img className="codeImage" src={p4front} id="p4front" alt="fourth project front end code snippet"/>
                        <img className="codeImage" src={p4back} id="p4back" alt="fourth project back end code snippet"/>
                    </div> */}
                    <div className="projectDescription">
                        Nutrition stat tracking application utilizing python scripts. Features Django built in CRUD operations with user authentication and protected routes as well as parsed data pulled from USDA nutrition API. Current deployment under construction. 
                    </div>
                    <img className="liveImage" src={p4live} alt="fourth project live"/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/ldb297/python_visualizer" target="_blank" rel="noreferrer">Github Link</a>
                    <span className="deployedLink">Deployment Under Construction</span>
                </div>
            </div>

            <div className="projectDisplayContainer" id="projectThree">
                <span className="projectTitle">nipponRunner</span>
                <span className="projectTechnologies">MongoDB, Express, React, Node</span>
                <div className="projectImage">
                    {/* <div className="dualImages">
                        <img className="codeImage" id="p3back" src={p3back} alt="third project back end code snippet"/>
                        <img className="codeImage" id="p3front" src={p3front} alt="third project front end code snippet"/>
                    </div> */}
                    <div className="projectDescription">
                        MERN application built to help increase hiragana reading proficiency. Incorporated custom built API housing necessary hiragana characters. Constructed programmatically generated styling based on state variables connected to User info.
                    </div>
                    <img className="liveImage" src={p3live} alt="third project live"/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/jessica-au/nipponrunnerFrontend"  target="_blank" rel="noreferrer">Github Frontend</a>
                    <a className="githubLink" href="https://github.com/jessica-au/nipponrunner" target="_blank" rel="noreferrer">Github Backend</a>
                    <a className="deployedLink" href="https://nipponrunner.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
                </div>
            </div>

            <div className="projectDisplayContainer" id="projectTwo">
                <span className="projectTitle">gameBook</span>
                <span className="projectTechnologies">Express/PostgreSQL/Node</span>
                <div className="projectImage">
                    {/* <img className="codeImage" id="p2code" src={p2code} alt="second project code snippet"/> */}
                    <div className="projectDescription">
                        Video game API based user messaging boards built out in Node.js. Incorporated neatly parsed information from RAWG API, protected user routes for dynamic comment functions with looping database information retrieval and display.
                    </div>
                    <img className="liveImage" id="p2live" src={p2live} alt="second project live"/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/ldb297/gamebook" target="_blank" rel="noreferrer">Github Link</a>
                    <a className="deployedLink" href="https://gamebook297.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
                </div>
            </div>

            <div className="projectDisplayContainer" id="projectOne">
                {/* flex */}
                <span className="projectTitle">[2B || !2B]</span>
                <span className="projectTechnologies">HTML5, CSS3, Javascript</span>
                <div className="projectImage">
                    {/* <img className="codeImage" id="p1code" src={p1code} alt="first project code snippet"/> */}
                    <div className="projectDescription">
                        HTML5, CSS, ES6 web based fighting simulator. Algorithmic fighting sequences based on DOM manipulation of user inputs. Let me know if you get to the final boss, he's pretty strong lol.
                    </div>
                    <img className="liveImage" id="p1live" src={p1live} alt="first project live"/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/ldb297/Project-1" target="_blank" rel="noreferrer">Github Link</a>
                    <a className="deployedLink" href="https://ldb297.github.io/Project-1/" target="_blank" rel="noreferrer">Deployed Link</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;