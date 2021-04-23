import React from 'react';

//styling
import './styling/Projects.css'

//image imports
import p1code from './styling/images/p1code.png';
import p1live from './styling/images/p1live.png';
import p2code from './styling/images/p2code.png';
import p2live from './styling/images/p2live.png';
import p3back from './styling/images/p3back.png';
import p3front from './styling/images/p3front.png';
import p3live from './styling/images/p3live.png';
import p4back from './styling/images/p4back.png';
import p4front from './styling/images/p4front.png';
import p4live from './styling/images/p4live.png';

const Projects = () => {

    return (
        <>
        <div className="mainProjectContainer">
            {/* flex column*/}

            <div className="projectDisplayContainer" id="projectFour">
                <span className="projectTitle">Nutrifit Tracker</span>
                <div className="projectImage">
                    <div className="twoImages">
                        <img className="codeImage" src={p4front} id="p4front"/>
                        <img className="codeImage" src={p4back} id="p4back"/>
                    </div>
                    <img className="liveImage" src={p4live}/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/ldb297/python_visualizer" target="_blank" rel="noreferrer">Github Link</a>
                    <span className="deployedLink">Deployment Under Construction</span>
                </div>
            </div>

            <div className="projectDisplayContainer" id="projectThree">
                <span className="projectTitle">nipponRunner</span>
                <div className="projectImage">
                    <div className="dualImages">
                        <img className="codeImage" id="p3back" src={p3back}/>
                        <img className="codeImage" id="p3front" src={p3front}/>
                    </div>
                    <img className="liveImage" src={p3live}/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/jessica-au/nipponrunnerFrontend"  target="_blank" rel="noreferrer">Github Frontend</a>
                    <a className="githubLink" href="https://github.com/jessica-au/nipponrunner" target="_blank" rel="noreferrer">Github Backend</a>
                    <a className="deployedLink" href="https://nipponrunner.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
                </div>
            </div>

            <div className="projectDisplayContainer" id="projectTwo">
                <span className="projectTitle">gameBook</span>
                <div className="projectImage">
                    <img className="codeImage" id="p2code" src={p2code}/>
                    <img className="liveImage" id="p2live" src={p2live}/>
                </div>
                <div className="links">
                    <a className="githubLink" href="https://github.com/ldb297/gamebook" target="_blank" rel="noreferrer">Github Link</a>
                    <a className="deployedLink" href="https://gamebook297.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
                </div>
            </div>

            <div className="projectDisplayContainer" id="projectOne">
                {/* flex */}
                <span className="projectTitle">[2B || !2B]</span>
                <div className="projectImage">
                    <img className="codeImage" id="p1code" src={p1code}/>
                    <img className="liveImage" id="p1live" src={p1live}/>
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