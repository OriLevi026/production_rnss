import React, { Component } from 'react';
import TSViewer from './TSViewer';
import './App.css'
import Lesson from './Lesson';

class TopoSpeechTutorial extends Component {
    constructor(props){
        super(props);    
        this.state = { 
            view: true,
            step:-1,
            s1:1,
            s2:2,
            lessons:[
                <Lesson head="Left to Right" 
                contant="At first, there is a beep sound, which indicates the start of the soundscape.
                        Then you will hear the name of the object at certain point of time. Some time after that,
                        you will hear another beep.
                        Remember, the timing and pitch of the way the object is being read, 
                        are indicating where it is on the table"
                rows={1} cols={2} answerIndex={2} imgSrc="/cup_left_.jpeg" audioSrc="/cup_left_.mpeg" imgText="Cup"/>,
                <Lesson head="Up & Down or High and Low"
                contant="The more the object is higher on the y-axis – it will be read in a higher pitch.
                The lower it is – the pitch will be lower."
                rows={2} cols={1} answerIndex={1} imgText="Cup"/>,
                <Lesson head="left, MIDDLE and rght" 
                rows={1} cols={3} answerIndex="" />,
                <Lesson head="The 4X4 up-left\right down-left/right" 
                rows={2} cols={2} answerIndex={2} imgSrc="/cup_left_.jpeg" audioSrc="/cup_left_.mpeg"/>,
                <Lesson head="2X3 hard" 
                contant="" rows={2} cols={3} answerIndex={2} imgSrc="/cup_left_.jpeg" audioSrc="/cup_left_.mpeg"/>,
                
            ]
         }
        }
        createView=(step)=>{
            
            console.log(this.state.step);
            let viewer = this.state.lessons[step];
            return viewer;
        }
        nextLesson=()=>{
            this.state.step++;
            this.setState(this.createView);
            
        }
         

    render() { 
        return ( 
            <div class="container">
                <h3>Welcome To The Step by step training</h3>
                {/* {this.createView(this.state.step)} */}
               {this.state.lessons}
               <button onClick={this.nextLesson}>
                    <span >Next</span>
                </button>
                
            </div>  
         );
    }
} 

 
export default TopoSpeechTutorial;