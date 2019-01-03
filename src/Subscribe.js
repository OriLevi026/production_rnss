import React, { Component } from 'react';
class Subscribe extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Want to become an EyeMusic pioneer? join our mailing list!</h2>
                <input type="email-adress" placeholder="Email address" name="mail" required></input>
                <input type="submit" value="Subscribe"></input>
            </div>
         );
    }
}
 
export default Subscribe;