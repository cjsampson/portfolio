import React, { Component } from 'react';

import '../../../sass/contact.sass';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            reason: ''
        }

    }

    handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }

    handleEmailChange = (event) => {
        console.log(event.target.value);
        this.setState({email: event.target.value})
    }

    handleReasonChange = (event) => {
        console.log(event.target.value);
        this.setState({reason: event.target.value })
    }

    handleSubmit = (event) => {
        
    }

    render(){
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-3">
                        <div className="content is-medium">
                            <h1 className="has-text-centered greeting"><strong>Hey There!</strong></h1>
                            <p>If you are looking to partner up on a project or would like to just say hello, drop me a quick line so we can chat.</p>
                            <p>All types of feedback are greatly appreciated!</p>
                        </div>
                    </div>                    
                    <div className="column is-1 is-offset-1 is-flex-mobile mail">
                        <figure className="image is-128x128">
                            <img src="/images/mail.png" alt="mail pic" />                        
                        </figure>
                    </div>
                    <div className="column is-5 is-offset-2" id="contact-form">
                        <div className="box">
                            <label className="label">Name</label>
                            <p className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Name:"
                                    onChange={this.handleNameChange}
                                    value={this.state.name}
                                />
                            </p>
                          
                            <label className="label">Email</label>
                            <p className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Email:"
                                    onChange={this.handleEmailChange}                    
                                    value={this.state.email}
                                />
                            </p>

                            <label className="label">Do you like the site?</label>
                            <p className="control">
                                <textarea 
                                    className="textarea" 
                                    type="text" 
                                    placeholder="Shoot me a line! I'd love to hear from you"
                                    onChange={this.handleReasonChange}
                                    value={this.state.reason}
                                >
                                </textarea>
                            </p>                          

                            <p className="control">
                                <button 
                                    className="button send" 
                                    id="sendbutton"
                                    onClick={this.handleSubmit}
                                >
                                    Send
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}