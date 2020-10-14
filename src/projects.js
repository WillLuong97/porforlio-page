import React, { Component } from 'react';
import Background from './img/paper-1.jpg';
import './Project.css'



class Projects extends Component{
    render(){
        return(
            <div className="project">
                <div className="project-header">
                    <h3>Projects</h3>
                    <a href="https://github.com/WillLuong97">Explore All</a>
                </div>
                <h3>These are various projects that I created from various programming langueages</h3>
                <Table />


            </div>
        );
    }
}


class Table extends Component{
        //creating a table to store the data for the projects
        constructor(props){
            super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
            this.state = {
                //state is default by an object
                projct: [
                    {title: 'Autonomous Vehice Simulation', description: 'soemthing here something here', language: 'Python, Javascript'},
                    {title: "Socket Network", description: "soemthing here something here", language: "Python"},
                    {title: "See&Eat", description: "soemthing here something here", language: "Swift"}
                ]
            }
        }
    
        //function for table data and calling it in our render method. 
        renderTableData(){
            return this.state.projct.map((project, index) => {
                const{ title, description, language } = project //destructing
                return (
                    <tr key={title}>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{language}</td>
                    </tr>
                )
            })
        }
    
        //funciton to create a table header: 
        renderTableHeader(){
            let header = Object.keys(this.state.projct[0])
            return header.map((project, index) => {
            return <th key={index}>{project.toUpperCase()}</th>
            })
        }
        render(){
            return(
                <div>
                    <table id='projects'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            )
        }
    
}

export default Projects;
