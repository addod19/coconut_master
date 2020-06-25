import React from 'react'  
// import { Link, useLocation } from 'react-router-dom';
// import { MyNavItems, MyNavLink } from 'carbon-components-react/lib/components/UIShell';

// import StyledMyNav from './Style';
import './NavStyle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from '../Layout/Register';
import About from '../Layout/About';
import Home from '../Layout/Home';
import Main from '../Main/Main';
import  CoconutSVG from '../../Images/coconut.svg'


const Navigation = () => {

    return (  
      <Router>
          <nav className="d-flex myFlex">
            <div className="coconutWrap">
                <img src={CoconutSVG} alt="" className="logoSize" />
                <span className="coconut">Coconut</span>
                <span className="master">Master</span>
            </div>
            <ul className="d-flex justify-content-around c-b">
                <li className="ls-none">
                <Link to="/" className="p-color">Coconut Master</Link>
                </li>
                <li className="ls-none">
                <Link to="/about_us" className="p-color">About Us</Link>
                </li>
                <li className="ls-none">
                <Link to="/register" className="p-color">Register</Link>
                </li>
            </ul>
        </nav>
        <Switch>
          <Route path="/about_us">
            <About />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>  
    );  
}  
  
export default Navigation;