import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="nav-container">
                <div id="nav-logo">
                    <img src="/RNSS_logo.png" width='160px' height='auto' align="left"></img>
                </div>
                <div class="nav-button">
                    <NavLink class="HomeNav"to="/">HOME </NavLink>
                    <NavLink class='AboutNav' to="/About">ABOUT  </NavLink>
                    <NavLink class='ResearchNav' to='/Research'>RESERCH  </NavLink>
                    <NavLink class='TechnologyNav' to='/Technology'>TECHNOLOGY  </NavLink>
                    <NavLink class='ContactNav' to='/Contact'>CONTACT  </NavLink>
                    <NavLink class="TrainNav" to="/TrainEyeMusic">TRAIN-EYE-MUSIC</NavLink>
                </div>
            </div>
         );
    }
}
 
export default NavigationBar;