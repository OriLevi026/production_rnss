import React, { Component } from 'react';
import TSViewer from './TSViewer';
import './App.css'


class TopoSpeach extends Component {
    state = {
        answerStep:0,
        indexStep:0,
        answerIndex:2,
        index:[1,2,3,4],
        texts:["Wrong 1/3","Wrong 2/3","Wrong 3/3"],

        
     }
    update(index){
        index = JSON.stringify(index);
        console.log(this.state.count)
        if(index == this.state.answers[this.state.step]){
            return (
                window.alert("Correct - next!!!!!")
            ); 
        }
        else {
            if(this.state.count == 2){
                return window.alert("Worng - next!!!!!");
            }
            this.state.count++;
            return window.alert("TRY AGAINNNN   ");
        }   
    }

    
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
                    {/* TopoSpeech - Viewer */}
                    <audio src="/beep-07.mp3" controls/>
                    <div class = "TopospeachViewer" >
                        <div class="row">
                            <button class="hover-button">
                                <span class="hover-button--off">{this.state.index[this.state.indexStep++]}</span>
                                <span class="hover-button--on">{this.state.texts[this.state.answerStep++]}</span>
                            </button>

                            <button onClick={() => this.update(this.state.index[1])} class="hover-button">
                                <span class="hover-button--off">{this.state.texts[this.state.indexStep++]}</span>
                                <span class="hover-button--on">{this.state.texts[this.state.answerStep++]}</span>
                            </button>
                        </div>
                        <div class="row">                   
                                <button onClick={() => this.update(this.state.index[2])} class="hover-button">
                                    <span  class="hover-button--off">{this.state.index[2]}</span>
                                    <span  class="hover-button--on">{this.state.index[2]}</span></button>
                                <button  onClick={() => this.update(this.state.index[3])}class="hover-button">
                                    <span class="hover-button--off">{this.state.index[3]}</span>
                                    <span class="hover-button--on">{this.state.index[3]}</span>
                                </button>   
                            </div>
                        </div>
                    </div>
         );
    }
}
 
export default TopoSpeach;