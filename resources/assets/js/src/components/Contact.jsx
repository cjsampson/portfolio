import React, { Component } from 'react';

export default class Contact extends Component {
    render(){
        return (
            <div class="container">
                <div className="columns">
                    <div className="column is-half">
                        <img src="/images/mail.png" alt="mail pic" />
                    </div>
                    <div className="column is-half">
                        <input type="text" />
                        <input type="email" />
                        <textarea></textarea>
                    </div>
                </div>
            </div>
        )
    }
}