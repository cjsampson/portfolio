import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import data from '../data/portfolio';
import '../../../sass/portfolio.sass';

console.log(data)

const Portfolio = () => (
    <div className="container">
        <div className="columns">


            <div className="column is-two-thirds is-offset-2">
                <div className="box portfolio">

                    <article className="media">
                        <div className="columns">

                            <div className="column is-5 is-flex image-column">
                                <div className="media-left is-flex">

                                    <figure className="image-container">
                                        <img src="/images/bl.png" alt="Image" />
                                    </figure>

                                </div>
                            </div>

                            <div className="column is-7">
                                <div className="media-content is-flex-mobile media-flex">
                                    <div className="content is-flex">
                                        <p className="project-description">
                                            <strong>Blueline Screening Source</strong> is a large, enterprise drug testing software.  I was tasked with building a user-based role system for the admin and client portals for access restriction.  The software had a complex backend with a large amount of sql tables.
                                        </p>
                                        <div className="project-technologies">
                                            <p><strong>Technologies used:</strong> Laravel Framework, Twitter Bootstrap, AJAX, Datatables, jQuery, Sequel Pro, NPM, Gulp, Vagrant, Ansible</p>
                                            <a className="is-flex github-container private">
                                                <i className="fa fa-github" aria-hidden="true"></i>
                                                <span className="github-span">Private Repo</span>
                                            </a>
                                        </div>
                                    </div>                  
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
)

export default Portfolio;