// import modules
import { Route } from 'react-router-dom';

//import css
import './App.css';

//import components
import Footer from './components/Footer';
import MainCard from './components/MainCard';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  //declare state variables and functions


  return (
    <div className="mainApp">
      {/*declare what is to be rendered on client-side*/}
      <div className="nameHeader">Leo Brooks</div>
      <div className="professionTitleHeader">Software Engineer</div>
      <hr className="nameHeaderLine"/>
      <Navigation/>
      <Route exact path="/" component={AboutMe}/>
      <Route path="/projects" component={Projects}/>
      {/* include component that houses entire business card component*/}
      <Footer/>
    </div>
  );
}

export default App;