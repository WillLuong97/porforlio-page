import React from 'react';
import './Footer.css'
class Footer extends React.Component {
    render(){
        return(
            <div className="Footer">
                <div className="Footer-Header">
                    <h3>Stay Connected</h3>
                </div>

                <div className="icon">
                    <div>
                        <span>
                        <a href="https://github.com/WillLuong97"><ion-icon name="logo-github"></ion-icon></a>
                        <a href="https://www.linkedin.com/in/tri-luong-9b6681175/"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="#button"><ion-icon name="logo-snapchat"></ion-icon></a>
                        <a href="/contact"><ion-icon name="mail-outline"></ion-icon></a>
                        </span>
                    </div>
                </div>
                
            </div>

        );
    }
}


export default Footer;
