import React, { Component } from 'react';

class ContactPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="gray_cover">
                <div class="container" >
                    <div>Are you a visually impaired individual or an expert in the field of blindness?
                        We are developing our device in collaboration with people who are blind and visually impaired</div>
                        <br/>
                        <div>Contact us to get involved, or for any other inquiry.</div>
                    <div class="input-container">
                        <input class="input-contact" type="name" placeholder="Full Name" name="name" required></input>
                        <br/><input class="input-contact" type="email-adress" placeholder="E-mail address" name="mail" required></input>
                        <br/><input class="input-contact" type="subject" placeholder="Subject" name="subject" ></input>
                        <br/><input class="msg-contact" type="message" placeholder="Your Message" name="msg" ></input>
                        <br/><input class="input-contact" type="submit" value="Send"></input>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ContactPage;