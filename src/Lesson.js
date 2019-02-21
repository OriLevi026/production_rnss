import React, { Component } from 'react';
import TSViewer from './TSViewer';

class Lesson extends Component {
    constructor(props){
        super(props);
        this.state = {
            head:props.head,
            contant:props.contant,
            rows:props.rows,
            cols:props.cols,
            answerIndex:props.answerIndex,
            visible:true,
            audioSrc:props.audioSrc,
            imgSrc : props.imgSrc,
            imgText:props.imgText,
            
         }
    }

    render() { 
            return ( 
                <div >
                <h1>{this.state.head}<br/></h1>
                <span>{this.state.contant}</span> 
                <div class = "TopospeachViewer">
                <TSViewer rows={this.state.rows} cols={this.state.cols} 
                    answerIndex={this.state.answerIndex} audioSrc={this.state.audioSrc} imgSrc={this.state.imgSrc} imgText={this.state.imgText}/>
                </div>
                
                </div>


             );
        }
}
 
export default Lesson;