import React from 'react';
import { NavLink } from 'react-router-dom';

import './styling/Navigation.css';

const Navigation = () => {
    return (
        <div className="navigationContainer">
            <div className="aboutLink"><NavLink className="navigationLink" to="/about">About</NavLink></div> 
            <div className="projectsLink"><NavLink className="navigationLink" to="/projects">Projects</NavLink></div>
            {/* potentially put some nav links and rename this component */}
        </div>
    )
}

export default Navigation;