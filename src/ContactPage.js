import React, { Component } from 'react';

class ContactPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container" >
                <h2>Are you a visually impaired individual or an expert in the field of blindness? our device's development is done together with people who are blind and visually impaired.<br/> To help us, or for any other inquiry, get in Touch!</h2>
                <div class="input-container">
                    <input class="input-contact" type="name" placeholder="Full Name" name="name" required></input>
                    <br/><input class="input-contact" type="email-adress" placeholder="E-mail address" name="mail" required></input>
                    <br/><input class="input-contact" type="subject" placeholder="Subject" name="subject" ></input>
                    <br/><input class="msg-contact" type="message" placeholder="Your Message" name="msg" ></input>
                    <br/><input class="input-contact" type="submit" value="Send"></input>
                </div>
            </div>
         );
    }
}
 
export default ContactPage;