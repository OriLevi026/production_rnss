import React, { Component } from 'react';

class AwardsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div> IN THE NEWS & AWARDS
              <table>
                <tr>
                    <td><p><a href="https://www.nature.com/articles/ncomms7026" target="_blank">
                        <img src="./nature_communication.svg" width="180px"></img></a></p></td>
                    <td><p><a href="https://www.sciencedirect.com/science/article/pii/S0896627312007635" target="_blank">
                        <img src="./neuron.svg" width="180px"></img></a></p></td>
                    <td><p><a href="https://media.wix.com/ugd/46b504_eb6c0c979a34431aa21b058ac5fe7713.pdf" target="_blank">
                        <img src="./scientific_reports.svg" width="180px"></img></a></p></td>
                    <td><p><a href="https://media.wix.com/ugd/46b504_2777daf379f54359bf9dffb64ccbec06.pdf" target="_blank">
                        <img src="./cerebral_cortex.webp" width="180px"></img></a></p></td>
                    <td><p><a href="https://www.sciencedirect.com/science/article/pii/S0960982214001481" target="_blank">
                        <img src="./current_biology.svg" width="180px"></img></a></p></td>  
                </tr>
                <tr>
                    <td><p><a href="http://sante.lefigaro.fr/actualite/2014/03/23/22139-aveugles-peuvent-voir-avec-oreilles" target="_blank">
                        <img src="./le_figaro.JPG" width="180px"></img></a></p></td>
                    <td><p><a href="https://www.wired.com/2014/03/blind-brain-sound/" target="_blank">
                        <img src="./wired-logo-transparent.webp" width="180px"></img></a></p></td>
                    <td><p><a href="https://news.nationalgeographic.com/news/2014/04/140403-eyemusic-ssd-visual-impairment-software-science/" target="_blank">
                        <img src="./national geographic logo.webp" width="180px"></img></a></p></td>
                    <td><p><a href="https://www.nytimes.com/2014/06/11/science/to-aid-the-blind-an-assist-from-cameras.html?_r=0" target="_blank">
                        <img src="./The_New_York_Times_logo.webp" width="180px"></img></a></p></td>
                    <td><p><a href="https://www.newyorker.com/magazine/2017/05/15/seeing-with-your-tongue" target="_blank">
                        <img src="./the-new-yorker-logo.jpg" width="180px" height="120px"></img></a></p></td> 
                </tr>
                <tr>
                    <td></td>
                    <td><p><a href="https://www.youtube.com/watch?v=jVBp2nDmg7E" target="_blank">
                        <img src="./tedx-logo.webp"></img></a></p></td>
                    <td><p><a href="https://masschallenge.org/startups?combine=renewsenses&industries=All%20industries&location=All%20locations&year=2017&status=any&startup=renewsenses#eform" target="_blank">
                        <img src="./MCLogo.webp"></img></a></p></td>
                    <td><p><a href="https://creatorawards-origin.wework.com/events/tel-aviv-2017/" target="_blank">
                        <img src="./logo-dark@2.png"></img></a></p></td>
                </tr>    
              </table> 
            </div>
         );
    }
}
 
export default AwardsPage;