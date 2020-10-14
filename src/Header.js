import React from 'react';
import Background from './img/pic2.jpg';
import './Header.css'

const myStyles = {backgroundImage: `url( ${Background} )`, height: "60vh", backgroundsize: 'cover'}


class Header extends React.Component {
    render(){
        return(
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>A self-improving software enginner through research, development and practice</p>
                {/* <a href="#button">{this.props.button}</a> */}

            </header>


        );
    };


};

export default Header;