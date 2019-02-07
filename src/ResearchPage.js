import React, { Component } from 'react';
class ResearchPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="container">
                    <h2>Combining impact and cutting-edge technology with years of research</h2>
                    <table >
                        <tr class="headline" >
                            <td>Impact</td>
                            <td>Technology</td>
                            <td>Research</td>
                        </tr>
                        <tr >
                            <td>285 million people with visual impairment suffer from lower quality of life, lower independence resulting in a huge unmet need in this population</td>
                            <td>A novel form of eyes-free interaction with the visual world, with relevance to many other use cases of human enhancement and rehabilitation</td>
                            <td>Research have consistently shown us how areas in the visual cortex of people who are blind from birth are activated using our working prototype</td>
                        </tr>
                    </table>
                </div>
                <div class="youtube"> 
                    <iframe width="60%" height="450px" src="https://www.youtube.com/embed/jVBp2nDmg7E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <div class="container">in the video: Co-founder Prof. Amir Amedi of the Hebrew University of Jerusalem, explaining the research behind the technology.<br/>see more at www.brainvisionrehab.com</div>
            </div>
         );
    }
}
 
export default ResearchPage;