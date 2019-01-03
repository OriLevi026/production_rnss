import React, { Component } from 'react';
import './App.css'

class CorrectButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:props.value || 0,
            clickedValue : "Correct",
            view:"beforeClick",
          }

    }
    onClicked = () => {
        this.setState({ value: this.state.clickedValue });
        this.setState({view : "afterClick-Correct"})
    }
    
    render() {  
        return (
            <button class={this.state.view} onClick={this.onClicked}>
                {this.state.value}
            </button>
            );
    }
}
 
export default CorrectButton;