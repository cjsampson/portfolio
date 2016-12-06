import React, { Component } from 'react';

import '../../../sass/resume.sass';

export default class Resume extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2 resume">
                        <div className="content">
                            <section class="section">   
                                <div className="heading">
                                    <figure className="image is-128x128 resume-pic">
                                        <img src="/images/cj.jpg" />
                                    </figure>
                                    <p className="professional-title">Software Developer</p>
                                    <p className="residence">Salt Lake City, Utah</p>                            
                                </div>
                            </section>

                            <hr />

                            <section className="section">                                
                                <div className="content">

                                    <h2>Work Experience</h2>
                                    <h5 className="title"><span className="job-title">SLC Dev Shop</span> <span><strong>May 2016 - Dec 2016</strong></span></h5>                                    
                                    <p>Full-stack Web Developer.  Developed a wide variety of features ranging from the back and front end.  On multiple applications, I was tasked with Behavior Driven Development using Behat, Selenium Driver, and the Mink Extension for PHP.  Responsible for maintenance of applications, and was given the responsibilty to help our overseas developers with guidance and teaching.</p>

                                    <br />

                                    <h5 className="title"><span className="job-title">Freelance Web Developer</span> <span><strong>July 2015 - Dec 2015</strong></span></h5>                                    
                                    <p>Worked on different applications using Wordpress and PHP for the backend.  Developed a fantasy football application using a multitude of widgets and UI components.</p>

                                    <hr />

                                    <h2>Education</h2>
                                    <h5><span className="education">Codeup, Software Development Bootcamp</span> <span><strong>Jan 2016 - May 2016</strong></span> <span className="education-location">San Antonio, TX</span></h5>
                                    <p>Full-stack web development training school. Over 700 hours of schooling including in-class plus study sessions.</p>
                                    <p><strong>Technologies learned:</strong> HTML, CSS, JavaScript, PHP, Laravel, Apache, Linux</p>

                                </div>
                            </section>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}