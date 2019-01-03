import React, { Component } from 'react';
class ResearchPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Combining impact and cutting-edge technology with years of research</h1>
                <table align="center">
                <tr class="reserch-title2" >
                    <td>Impact</td>
                    <td>Technology</td>
                    <td>Research</td>
                </tr>
                <tr>
                    <td>285 million people with visual<br/> impairment suffer from lower<br/> quality of life, lower<br/> independence resulting in a huge<br/> unmet need in this population</td>
                    <td>A novel form of eyes-free<br/> interaction with the visual world,<br/> with relevance to many other<br/> use cases of human<br/> enhancement and rehabilitation</td>
                    <td>Research have consistently shown<br/> us how areas in the visual cortex<br/> of people who are blind from birth<br/> are activated using our working<br/> prototype</td>
                </tr>

                </table>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jVBp2nDmg7E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h6>in the video: Co-founder Prof. Amir Amedi of the Hebrew University of Jerusalem, explaining the research behind the technology.see more at www.brainvisionrehab.com</h6>
            </div>
         );
    }
}
 
export default ResearchPage;