import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="navigation-bar">
                <img class="logo" src="/biglogo.jpg" ></img>
                <div class="nav-buttons">
                    <NavLink class="nav-link"to="/" >HOME  </NavLink>
                    <NavLink class='nav-link' to="/About">ABOUT  </NavLink>
                    <NavLink class='nav-link' to='/Research'>RESEARCH  </NavLink>
                    <NavLink class='nav-link' to='/Technology'>TECHNOLOGY  </NavLink>
                    <NavLink class='nav-link' to='/Contact'>CONTACT  </NavLink>
                    <NavLink class="nav-link" to="/TrainEyeMusic">TRAIN-EYE-MUSIC</NavLink>
                </div>
                <div class="blackLine"/>
            </div>
         );
    }
}
 
export default NavigationBar;