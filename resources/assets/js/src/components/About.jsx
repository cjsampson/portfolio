import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image-container">
                        <img src="/images/coffeemug.jpg" alt="Image" />
                    </figure>
                  </div>
                  <div className="column is-6 is-offset-1">
                    <p className="has-text-left">Hey There!  My name is CJ Sampson and I'm a software developer from Navarre Beach Florida.  When I'm not programming, I'm usually reading books or listening to the  Doctor Rhonda Podcast.</p>
                  </div>
                </div>
              </div>
            </div>

        )
    }
}