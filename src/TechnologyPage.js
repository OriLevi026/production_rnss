import React, { Component } from 'react';

class TechnologyPage extends Component {
    state = {  }
    render() { 
        return (
            <div class="container">
                <h2>Creating a new sensory language, composed from musical notes and speech.</h2>
                <h4>RenewSenses's EyeMusic combines sensory substitution and computer vision in a wearable device.<br />Our IP-Protected technologies enables the user to know which object are around,<br /> where they are located and also - have a new perceptual experience of the visual surroundings.</h4>
                <img class="tech-img" src="/technology_img.png" alt="big"></img>
                <div>
                    <iframe class="youtube"  src="https://www.youtube.com/embed/r6bz1pOEJWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
                <h5>In the video: Live demo of our technology used by a user blind from birth</h5>
                
            </div>
          );
    }
}
 
export default TechnologyPage;