import React, { Component } from 'react';

class CreateButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:props.value,
           
        }
    }
    // clicked = (value) =>{
    //     if(value == answer){
    //         console.log("Correct");
    //     }
    //     else {
    //         this.state.value = "try again";
    //     }
    // }
    render() { 
        return ( 
        <button class="hover-button" onClick={this.props.clicked(this.state.value)}>
            <span class="hover-button--off">{this.state.value}</span>
            <span class="hover-button--on">{this.state.value}</span>
        </button> );
    }
}
 
export default CreateButton;