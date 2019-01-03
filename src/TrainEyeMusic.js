import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';




class TrainEyeMusic extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
                <div>
                    <p>Select Class</p>
                </div>
                <div class="classes">
                        <button>TopoSpeach
                            <NavLink to="/TrainEyeMusic/TopoSpeach" ><br/> Start the Step By Step Training</NavLink>
                        </button>
                        <button>TopoSpeach2
                            <NavLink to="/TrainEyeMusic/TopoSpeechTutorial" ><br/> Start the Step By Step Training</NavLink>
                        </button>
                    </div>
                <div class="classes">
                    <button>
                        <NavLink to="/TrainEyeMusic/DiagonalLines">#1 Diagonal Lines</NavLink>
                    </button>
                    <button>
                        <NavLink to="/TrainEyeMusic/Horizontal-Lines">#2 Horizontal Lines</NavLink>
                    </button>
                    <button>
                        <NavLink to="/TrainEyeMusic/Vertical-Lines">#3 Vertical Lines</NavLink>
                    </button>
                    <button>
                        <NavLink to="/TrainEyeMusic/All-Types-Lines">#4 All Types Lines</NavLink>
                    </button>
                </div>
            </div>
         );
    }
}
 
export default TrainEyeMusic;