import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {

  return (
    <div>
     <ul className="navBar">
       <li> <Link to="/AboutUs"> About Us</Link> </li>
       <li> <Link to="/Menu"> Menu </Link> </li>

     </ul>
    </div>
 )
}

export default NavigationBar;
