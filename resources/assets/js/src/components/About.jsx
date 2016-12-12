import React, { Component } from 'react';

import '../../../sass/about.sass';

// implicit return
const About = () => (
    <div className="hero-body">
        <div className="container">
            <div className="columns column-row">
                <div className="column is-half flex picture-column">
                    <figure className="image-container flex">
                        <img src="/images/coffeemug.jpg" alt="Image" />
                    </figure>
                </div>
                <div className="column is-4 content-container">
                    <div className="content">
                        <h1 className="about-heading has-text-centered">A Little About CJ?</h1>
                        <p>My name is CJ Sampson and I am a software developer from Navarre Beach, Florida. Debugging complex problems related to anything programming or web is a great feeling.  Seeing software develop through the phases of nothing to production is one of the best feelings imaginable!</p>
                        <p>All things web/programming draw my interest being that I enjoy working on complex, logical problems.</p>

                        <h2 className="about-heading has-text-centered">Interests</h2>
                        <p>Being that I'm from the beach, the mountains in Salt Lake is where you'll be able to find me.</p>
                        <p>When I am not developing, I love reading anything related to Dr. Cal Newport, or listening to Dr. Rhonda Patrick.</p>
                        <p className="value"><strong>Value > Passion</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About