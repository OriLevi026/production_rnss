import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';




class TrainEyeMusic extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container" >
                <h2>Welcome to the Train-Eye-Music section</h2>
                <h3>in this section you will learn how to use our apps, Step by step.</h3>
                <div>learn how to use Renew senses app</div>
                <NavLink to="/TrainEyeMusic/TopoSpeechTutorial" > Start the Step By Step Training</NavLink>
                <br/><div>learn how to use EyeMusic app</div>
                <NavLink to="/TrainEyeMusic/DiagonalLines">Diagonal Lines</NavLink>
                <NavLink to="/TrainEyeMusic/Horizontal-Lines">Horizontal Lines</NavLink>
                <NavLink to="/TrainEyeMusic/Vertical-Lines">Vertical Lines</NavLink>
                <NavLink to="/TrainEyeMusic/All-Types-Lines">All Types Lines</NavLink>
            </div>
            );
        }
    }

                
 
export default TrainEyeMusic;