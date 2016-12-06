import React, { Component } from 'react';

import '../../../sass/contact.sass';

export default class Contact extends Component {
    render(){
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-3">
                        <div className="content is-medium">
                            <h1 className="has-text-centered">Hey There!</h1>
                            <p>If you are looking to partner up on a project or would like to just say hello, drop me a quick line so we can chat :)</p>
                            <p>All types of feedback are greatly appreciated!</p>
                        </div>
                    </div>                    
                    <div className="column is-2 is-flex-mobile mail">
                        <figure className="image is-128x128">
                            <img src="/images/mail.png" alt="mail pic" />                        
                        </figure>
                    </div>
                    <div className="column is-half" id="contact-form">
                        <div className="box">
                            <label className="label">Name</label>
                            <p className="control">
                                <input className="input" type="text" placeholder="Name:" />
                            </p>
                          
                            <label className="label">Email</label>
                            <p className="control">
                                <input className="input" type="text" placeholder="Email:" />
                            </p>

                            <label className="label">Do you like the site?</label>
                            <p className="control">
                                <textarea className="textarea" type="text" placeholder="Shoot me a line! I'd love to hear from you :) ">
                                </textarea>
                            </p>                          

                            <p className="control">
                                <button className="button send" id="sendbutton">Send</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}