import React, { Component } from 'react';
import Subscribe from './Subscribe'
import AboutVideo from './AboutVideo'

class AboutPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img src="../biglogo.jpg" alt="big"></img>
                <h1>Revolutionizing the way people with visual impairment live, navigate and experience the world.</h1>
                <h3>a novel form of eyes-free independence</h3>
                <Subscribe/>
                <AboutVideo/>
            </div>
         );
    }
}
 
export default AboutPage;