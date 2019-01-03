import React, { Component } from 'react';
import CreateButton from './CreateButton';
import CorrectButton from './CorrectButton';
import WrongButton from './WrongButton';
import './App.css'




class TSViewer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rows: props.rows,
            cols: props.cols,
            answerIndex: props.answerIndex || 1,
            audioSrc: props.audioSrc || "/beep-07.mp3",
            imgSrc: props.imgSrc,
            visible : props.visible || true,
        }
    }

    
    createView(){
        const contant = [];
        for(let i=1;i<=this.state.rows*this.state.cols;i++){
            if(i == this.state.answerIndex){//--> sets correct button
               contant.push(<CorrectButton value={i}/>);
            }
            else{//-->sets defult worng button
                contant.push(<WrongButton value={i}/>);
            }
            if(i%this.state.cols==0){//--> creat new row
                contant.push(<br/>);
            }
        }
        return contant;
        
            
        
    }

    
   render(){ 
       if(this.state.visible){

           if (this.props.answerIndex > this.state.rows*this.state.cols)return "answerIndex Erorr";
           //check if answer is exsit
           else return (
                <div>
                    <img class="TSVimg" src={this.state.imgSrc}/><br/>
                    <audio src={this.state.audioSrc} controls/>
                    <div>{this.createView()}</div>  
                </div>
    );
    }
    return null;
    
        /*
        if(this.props.rows == 1 && this.props.cols == 2)return(
           <div>
                <audio src={this.state.audioSrc} controls />
                <div class="row">
                    <CreateButton clicked={this.clicked} value={1}/>
                    <CreateButton clicked={} value={2}/>
                </div>
            </div>
        );
        //right-middle-left 
        if(this.props.rows == 1 && this.props.cols == 3)return(
            <div>
                 <audio src={this.state.audioSrc} controls />
                 <div class="row">
                    <CreateButton clicked={} value={1}/>  
                    <CreateButton clicked={} value={2}/>
                    <CreateButton clicked={} value={3}/>
                 </div>
             </div>
         );
        //up - down
        if(this.props.rows == 2 && this.props.cols == 1)return(
            <div>
                 <audio src={this.state.audioSrc} controls />
                 <div class="row">
                    <CreateButton clicked={} value={1}/>
                 </div>
                 <div class="row">
                    <CreateButton clicked={} value={2}/>
                </div>
             </div>
         );
         //classic 2X2
        if(this.props.rows == 2 && this.props.cols == 2)return(
            <div>
                 <audio src={this.state.audioSrc} controls />
                 <div class="row">
                    <CreateButton clicked={} value={1}/>
                    <CreateButton clicked={} value={2}/>
                 </div>
                 <div class="row">
                    <CreateButton clicked={} value={3}/>
                    <CreateButton clicked={} value={4}/>
                </div>
             </div>
         ); 
         //2X3
        if(this.props.rows == 2 && this.props.cols == 3)return(
            <div>
                 <audio src={this.state.audioSrc} controls />
                 <div class="row">
                    <CreateButton clicked={} value={1}/>
                    <CreateButton clicked={} value={2}/>
                    <CreateButton clicked={} value={3}/>
                 </div>
                 <div class="row">
                    <CreateButton clicked={} value={4}/>
                    <CreateButton clicked={} value={5}/>
                    <CreateButton clicked={} value={6}/>
                </div>
             </div>
         );
         //up - middle - down 3X1
        if(this.props.rows == 3 && this.props.cols == 1)return(
            <div>
                 <audio src={this.state.audioSrc} controls />
                 <div class="row">
                    <CreateButton clicked={} value={1}/>            
                 </div>
                 <div class="row">
                    <CreateButton clicked={} value={2}/>
                </div>
                <div class="row">
                    <CreateButton clicked={} value={3}/>
                </div>
             </div>
         );
         //3X2 
        if(this.props.rows == 3 && this.props.cols == 2)return(
            <div>
                <audio src={this.state.audioSrc} controls />
                <div class="row">
                     <CreateButton clicked={} value={1}/>
                     <CreateButton clicked={} value={2}/>
                </div>
                <div class="row">
                    <CreateButton clicked={} value={3}/>
                    <CreateButton clicked={} value={4}/>
                </div>
                <div class="row">
                    <CreateButton clicked={} value={5}/>
                    <CreateButton clicked={} value={6}/>
                </div>
             </div>
         );
         // 3X3
        if(this.props.rows == 3 && this.props.cols == 3)return(
            <div>
                 <audio src={this.state.audioSrc} controls />
                 <div class="row">
                    <CreateButton clicked={} value={1}/>
                    <CreateButton clicked={} value={2}/>
                    <CreateButton clicked={} value={3}/>            
                 </div>
                 <div class="row">
                    <CreateButton clicked={} value={4}/>
                    <CreateButton clicked={} value={5}/>
                    <CreateButton clicked={} value={6}/>
                </div>
                <div class="row">
                    <CreateButton clicked={} value={7}/>
                    <CreateButton clicked={} value={8}/>
                    <CreateButton clicked={} value={9}/>
                </div>
             </div>
         );
        // if(this.props.rows == 2 && this.props.cols == 3)return
        // if(this.props.rows == 3 && this.props.cols == 3)return
        
        */
        

            
    }
}

export default TSViewer;