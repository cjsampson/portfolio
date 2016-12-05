import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img src="https://images.unsplash.com/photo-1461669802687-84a1aee43a29?dpr=1&auto=format&crop=entropy&fit=crop&w=800&h=600&q=80" className="promo-img" alt="Description" />
                    </figure>
                  </div>
                  <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                      Introducing Landing Page
                    </h1>
                    <h2 className="subtitle is-4">
                      It's time to say hello to bulma.
                    </h2>
                    <br />
                    <p className="control has-addons has-text-centered">
                      <input className="input is-expanded is-large" type="text" placeholder="Join the beta waitlist, you@example.org" />
                      <a className="button is-large is-danger is-outlined">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

        )
    }
}