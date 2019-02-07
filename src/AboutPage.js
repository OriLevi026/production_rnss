import React, { Component } from 'react';


class AboutPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
                {/* <img class="img_middle" src="/rnss_logo.webp" /> */}
                <div class="BIG">Revolutionizing the way people with visual impairment live,<br/>
                    navigate and experience the world.</div>

                <div class="MED"><br/>A NEW FORM OF EYE-FREE INDEPENDENCE</div>

                <div class="SML"><br/>RenewSenses converts the visual world into an audio language, creating unparalleled independence for blind and
                    <br/>visually impaired individuals. We provide people with visual impairment the opportunity to understand the
                    <br/>composition of surrounding objects through a new sensory language of musical notes and speech.
                    </div>
                {/* 
                <div class="subscribe">
                    <span class="text"><br/>Want to become an EyeMusic pioneer? join our mailing list!<br/></span>
                    <input width="200px" type="email-adress" placeholder="Email address" name="mail" required ></input>
                    <br/>
                    <input type="submit" value="Subscribe"></input>
                </div> */}
            </div>
         );
    }
}
 
export default AboutPage;