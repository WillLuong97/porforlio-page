import React from 'react';
import './Navigation.css';
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render(){
        return (
            <nav>
               <ul className="Logo">
                <Link style={navStyle} to='/'>Will Luong</Link>
                </ul>
               <ul className="nav-links">
                   {/* <Link style={navStyle} to='/contact'>
                        <li>Projects</li>
                   </Link> */}

                    <Link style={navStyle} to='/contact'>
                        <li>Resume</li>
                   </Link>

                   <Link style={navStyle} to='/contact'>
                        <li>Contact</li>
                   </Link>

               </ul> 
            </nav>
          
        );

    }

}

const navStyle = {
    color: 'white'
    
};


export default Navigation;
