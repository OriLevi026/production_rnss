import React, { Component } from 'react';
class ResearchPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="gray_cover">
            <br/>
                <div class="container">
                    <div class="MED">We combine cutting-edge technology & years of research to make an impact.</div>
                    <div class="BIG">how does it works?</div>
                    <div class="SML">Creating a new sensory language, composed of musical notes and speech.<br/>
                         Conveying the visual world through sound.</div>
                    <br/>
                    <table >
                        <tr class="headline" >
                            <td>Impact</td>
                            <td>Technology</td>
                            <td>Research</td>
                        </tr>
                        <tr class="SML">
                            <td>There are 250 million people people worldwide who are visually impaired. Many suffer from depression as a result of their lower quality of life and lack of independence</td>
                            <td>With the help of computer vision, objects, faces and visual characteristics of a surrounding scene is converted to a unique, IP-protected auditory method combining speech and musical notes</td>
                            <td>Research has consistently shown that areas in the visual cortex of people who are blind from birth are activated using our working prototype.</td>
                        </tr>
                    </table>
                    <br/>
                    <div>RenewSenses' EyeMusic combines sensory substitution and computer vision in a wearable device.
                        Our IP-Protected technologies provides users with the ability to detect surrounding objects, where they are located and also - have a new perceptual experience of the visual landscape.</div>
                        <img class="tech-img" src="/technology_img.png" alt="big"></img>
                        <br/>
                </div>
                

            </div>
         );
    }
}
 
export default ResearchPage;