import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class DiagonalLines extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Select Level</h1>
                <NavLink to="/TrainEyeMusic/Diagonal-Lines/White">#1 White</NavLink>
                <NavLink to="">#2 Red</NavLink> 
                <NavLink to="">#3 Green</NavLink>
                <NavLink to="">#4 Blue</NavLink>
                <NavLink to="">#5 Yellow</NavLink>
                <NavLink to="">#6 Advanced</NavLink>              
                
            </div>  
                
         );
    }
}
 
export default DiagonalLines;