// import modules
import React, {useEffect, useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//import css
import './App.css';

//import components
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import MainCard from './components/MainCard';


function App() {
  //declare state variables and functions


  return (
    <div className="mainApp">
      {/*declare what is to be rendered on client-side*/}
      <div className="nameHeader">
        よろしくお願いします
      </div>
      <hr className="nameHeaderLine"/>
      <Welcome/>
      <MainCard/>
      {/* include component that houses entire business card component*/}
      <Footer/>
    </div>
  );
}

export default App;