import React, { Component } from 'react';
import TSViewer from './TSViewer';
import './App.css'


class TopoSpeach extends Component {
    render() { 
        return ( 
            <div>
                <h1>The algorithm rules are as follows:</h1>
                <h2>
                    At first, there is a beep sound, which indicates the start of the soundscape.<br/>
                    Then you will hear the name of the object at certain point of time. Some time after that, you will hear another beep.<br/>
                    Remember, the timing and pitch of the way the object is being read, are indicating where it is on the table</h2>
                <h1>LEFT-TO-RIGHT</h1>
                <h2>When the object is close to the left – it will be heard closer in time to the first beep.<br/>
                    The more it's on the right, it will be heard closer in time to the second beep</h2>
                <h1>HIGH-AND-LOW</h1>
                <h2>The more the object is higher on the y-axis – it will be read in a higher pitch.<br/>
                    The lower it is – the pitch will be lower.
                    Thank you very much for your participation!</h2>
                    <div class = "TopospeachViewer" >
                        <TSViewer  rows={2} cols={2} answerIndex={3} /> 
                        </div>
                    </div>
         );
    }
}
 
export default TopoSpeach;