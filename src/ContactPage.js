import React, { Component } from 'react';

class ContactPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Are you a visually impaired individual or an expert in the field<br /> of blindness? our device's development is done<br /> together with people who are blind and visually impaired.<br /> To help us, or for any other inquiry, get in Touch!</h2>
                <box>

                <input type="name" placeholder="Full Name" name="name" required></input>
                <input type="email-adress" placeholder="E-mail address" name="mail" required></input>
                <input type="subject" placeholder="Subject" name="subject" ></input>
                <input type="message" placeholder="Your Message" name="msg" ></input>
                <input type="submit" value="Send"></input>
                </box>


            </div>
         );
    }
}
 
export default ContactPage;