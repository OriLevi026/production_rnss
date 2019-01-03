import React, { Component } from 'react';

class TechnologyPage extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Creating a new sensory language, composed from musical notes and speech.</h1>
                <h4>RenewSenses' EyeMusic combines sensory substitution and computer vision in a wearable device.<br />Our IP-Protected technologies enables the user to know which object are around,<br /> where they are located and also - have a new perceptual experience of the visual surroundings.</h4>
                <img src="../technology.png" alt="big"></img>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/r6bz1pOEJWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h6>In the video: Live demo of our technology used by a user blind from birth</h6>
                
            </div>
          );
    }
}
 
export default TechnologyPage;