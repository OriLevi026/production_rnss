import React, { Component } from 'react';

class FoundersPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="Team">
                <div class="section-headline">MEET THE TEAM</div>
                <table>
                    <tr>
                        <td>
                            <img src="./Amir_BW.webp"/>
                            <div>
                                <span>Professor Amir Amedi, Co-Founder & CSO</span>
                                <span>He is an internationally acclaimed brain scientist with 15 years of experience
                                     in the field of brain plasticity and multisensory integration. He has a particular
                                      interest in visual rehabilitation. He is an Full Professor at the Department of 
                                      Medical Neurobiology at the Hebrew University.</span>
                            </div>
                        </td>
                        <td>
                            <img src="./Tomer.webp"/>
                            <div>
                                <span>Tomer Behor, CEO & Co-Founder </span>
                                <span>He worked closed with Professor Amedi, conducting multisensory research through
                                     cutting edge technology and specifically researched the area of assistive technology
                                      for the blind - research that yielded one of the patents used in RenewSenses.</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="./Serj.webp"/>
                            <div>
                                <span>Serj Smorodinsky, Vice President of R&D</span>
                                <span>Prior to joining the RenewSenses team, he received his Master of Science degree
                                     in Bioinformatics and was a lead developer at SafeDK LTD.</span>
                            </div>
                        </td>
                        <td>
                            <img src="./Naomi.webp"/>
                            <div>
                                <span>Nomi Teplitsky, Director of Communications & Partnerships</span>
                                <span>Originally from Canada, Nomi is bringing her Fundraising and Communications
                                     experience to RenewSenses to leverage new partnerships. Prior to moving to Israel,
                                      Nomi lived and worked in NYC for 9 years, where she completed her MPA degree and 
                                      gained experience in Corporate Social Responsibility.</span>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
         );
    }
}
 
export default FoundersPage;