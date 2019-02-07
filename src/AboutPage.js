import React, { Component } from 'react';
import Subscribe from './Subscribe'
import AboutVideo from './AboutVideo'

class AboutPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
                {/* <img src="../biglogo.jpg" alt="big"  width="500px" ></img> */}
                <h1>Renew Senses</h1>
                <span class="text">Revolutionizing the way people with visual impairment live, navigate and experience the world.<br/></span>
                <span class="text">a novel form of eyes-free independence</span>
                <div>
                    <br/>
                    <div>RenewSenses enables people with visual impairment to know which objects are around them<br />and where they are located.<br/><br/> Have a new form of perceptual experience of their visual elements,<br /> through a new sensory language composed of musical notes and speech<br/></div>
                    <br/><iframe class="tomer-youtube" width="60%" height="450px" src="https://www.youtube.com/embed/nZFpwogQ_AE" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>In the video: Tomer Behor, CEO, introducing RenewSenses at MassChallenge Israel awards.<br/>RenewSenses won the first place in the prestigious accelerator competition.</h3>
                </div>
                <div class="subscribe">
                    <span class="text"><br/>Want to become an EyeMusic pioneer? join our mailing list!<br/></span>
                    <input width="200px" type="email-adress" placeholder="Email address" name="mail" required ></input>
                    <br/>
                    <input type="submit" value="Subscribe"></input>
                </div>
            </div>
         );
    }
}
 
export default AboutPage;