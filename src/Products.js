import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Products extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="products">
                <NavLink class="" to='/Products/EyeMusicApp'> EyeMusic App </NavLink>
                <NavLink class="" to='/Products/EyeMusicWearable'> EyeMusic Wearable </NavLink>

            </div>
         );
    }
}
 
export default Products;