import React, { Component } from 'react';
import "./contact.css"


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    render(){
        return(
            <div className="App">
                <p>Contact Me</p>
                <div>
                    <form action="/action_page.php">
                    <label>First Name</label>
                    <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
                    <label>Last Name</label>
                    <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>


                    <label>Email</label>
                    <input type="email"id="email"name="email"placeholder="Your email"/>


                    <label>Subject</label>
                    <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
                    <input type="submit"value="Submit"/>
                    </form>
                </div>

            </div>

        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event){
        this.setState({email: event.target.value})
        
    }

    onMessageChange(event){
        this.setState({message: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);

    }
    
}




export default Contact;
