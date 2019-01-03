import React, { Component } from 'react';

class AboutVideo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>RenewSenses enables people with visual impairment to know which objects are around them;<br /> where they are located; and also have a new form of perceptual experience of their visual elements,<br /> through a new sensory language composed of musical notes and speech</div>
                <iframe class="tomer-youtube" width="560" height="315" src="https://www.youtube.com/embed/nZFpwogQ_AE" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>In the video: Tomer Behor, CEO, introducing RenewSenses at MassChallenge Israel awards.<br/>RenewSenses won the first place in the prestigious accelerator competition.</h3>
             </div>
         );
    }
}
 
export default AboutVideo;