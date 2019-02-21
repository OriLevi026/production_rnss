import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="navigation-bar">
                <div class="nav-buttons">
                    <img class="logo" src="/biglogo.jpg" />
                    <NavLink class="nav-link"to="/" >HOME  </NavLink>
                    {/* <NavLink class='nav-link' to="/About">ABOUT  </NavLink> */}
                    <a href="#About" alt="About">ABOUT</a>
                    <NavLink class='nav-link' to='/Products' exact>PRODUCTS</NavLink>{/* */}
                
                    <NavLink class='nav-link' to='/Research'>MEDIA  </NavLink>
                    <NavLink class='nav-link' to='/Technology'>VIDEO & TESTIMONIALS  </NavLink>
                    <a href="#Team">TEAM</a>
                    <NavLink class='nav-link' to='/Contact'>CONTACT  </NavLink>
                    <NavLink class="nav-link" to="/TrainEyeMusic">TRAIN-EYE-MUSIC</NavLink>
                </div>
                <div class="blackLine"/>
            </div>
         );
    }
}
 
export default NavigationBar;