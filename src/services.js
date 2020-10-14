import React, { Component } from 'react';
import './Services.css'


class Services extends Component{
    render(){
        return(
            <div className="services" >
                <h3>Technology Stack</h3>

                <h1>Tools that I used in various projects</h1>

                <div className="technology">
                    <div className="front-end-tools">
                        <h1>Front end</h1>
                        <h2> React.js</h2>

                        <p>Single page Web apps written in create-react-app</p>
                        <p>Single page Web apps written in create-react-app</p>
                            

                    </div>

                    <div className="back-end-tools">
                        <h1>Back end</h1>
                        <h2>Python</h2>
                        <p>Single page Web apps written in create-react-app</p>
                        <p>Single page Web apps written in create-react-app</p>


                    </div>

                    <div className="database">
                        <h1>Database</h1>
                        <h2>MySql, MongoDB</h2>
                        <p>Single page Web apps written in create-react-app</p>
                        <p>Single page Web apps written in create-react-app</p>


                    </div>



                    <div className="deployments">
                        <h1>Deployments</h1>
                        <h2>Github, AWS, Digital Oceans</h2>
                        <p>Single page Web apps written in create-react-app</p>
                        <p>Single page Web apps written in create-react-app</p>



                    </div>


                </div>

            </div>
        );
    }

}

// const iconObj = [
//     {
//         icon: <ion-icon name="phone-portrait-outline"></ion-icon>,
//         title: 'Software Development',
//         description: 'Look great on any screen size'
//     },
//     {
//         icon: <ion-icon name="pencil-outline"></ion-icon>,
//         title: 'Mobile Application',
//         description: 'Freshly redesinged with BootStrap 4'
//     },
//     {
//         icon: <ion-icon name="thumbs-up-outline"></ion-icon>,
//         title: 'Data Strategy',
//         description: 'This will be changed'

//     },
//     {
//         icon: <ion-icon name="help-circle-outline"></ion-icon>,
//         title: 'Community',
//         description: 'Computer Science tutor'
//     }
// ];

// class Icons extends Component{
//     render(){
//         return(
//             <div>
//                 <span>
//                     {this.props.icon}
//                 </span>
//                 <h4>{this.props.title}</h4>
//                 <p>{this.props.description}</p>
//             </div>

//         );
//     }
// }
export default Services;