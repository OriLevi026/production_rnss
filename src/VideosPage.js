import React, { Component } from 'react';

class VideosPage extends Component {
    state = {  }
    render() { 
        return (  
            <div class="gray_cover"> VIDEOS & TESTIMONIALS
                <table>
                    <tr>
                        <td>
                            <div> 
                                <iframe class="tomer-youtube" width="600px" height="500px"  src="https://www.youtube.com/embed/jVBp2nDmg7E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                in the video: Co-founder Prof. Amir Amedi of the Hebrew University of Jerusalem, explaining the research behind the technology.<br/>see more at www.brainvisionrehab.com
                            </div>
                        </td>
                        <td>
                            <div>
                                <iframe class="tomer-youtube" width="600px" height="500px"  src="https://www.youtube.com/embed/nZFpwogQ_AE" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div>
                                In the video: Tomer Behor, CEO, introducing RenewSenses at MassChallenge Israel awards.<br/>RenewSenses won the first place in the prestigious accelerator competition.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div><iframe class="tomer-youtube" width="600px" height="500px"  src="https://www.youtube.com/embed/r6bz1pOEJWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                                </div>
                                <div>In the video: Live demo of our technology used by a user blind from birth</div></td>
                        <td>
                            <div>"I could feel the world stretching out before me. It was as if my hand could reach much further.
                                 As if the silent objects on the other side of the room came to life."
                                 - H.M., 38 years old, congenitally blind
                            </div><br/><br/>
                            <div>"This experience is a whole new dimension. It is like you need to use this other part of your 
                                brain that has been sleeping for years."
                                - I.D. 56 years old, blind since 2003</div>
                        </td>
                    </tr>
                </table>
                
                
                


            </div>
        );
    }
}
 
export default VideosPage ;