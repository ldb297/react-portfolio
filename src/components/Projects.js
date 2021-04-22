import React from 'react';

const Projects = () => {

    return (
        <>
        <div className="mainProjectContainer">
            <div className="projectDisplayContainer" id="projectOne">
                <a id="projectOneDeployedLink" href="https://ldb297.github.io/Project-1/">Deployed Link</a>
            </div>

            <div className="projectDisplayContainer" id="projectTwo">
                <a id="projectTwoDeployedLink" href="https://gamebook297.herokuapp.com/">Deployed Link</a>
            </div>

            <div className="projectDisplayContainer" id="projectThree">
                <a id="projectThreeDeployedLink" href="https://nipponrunner.herokuapp.com/">Deployed Link</a>
            </div>

            <div className="projectDisplayContainer" id="projectFour">
                <span id="projectFourDeployedLink">Deployment Under Construction</span>
            </div>
        </div>
        </>
    )
}

export default Projects;