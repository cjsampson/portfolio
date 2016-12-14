import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import data from '../data/portfolio';
import '../../../sass/portfolio.sass';


const Portfolio = () => (
    <div className="container">
        <div className="columns">
            <div className="column is-two-thirds is-offset-2">

                {data.map(project =>
                    <div className="box portfolio" key={project.project}>
                        <article className="media">
                            <div className="columns">
                                <div className="column is-5 is-flex image-column">
                                    <div className="media-left is-flex">
                                        <figure className="image-container">
                                            <img src={project.image} alt="Image" />
                                        </figure>
                                    </div>
                                </div>

                                <div className="column is-7">
                                    <div className="media-content is-flex media-flex">
                                        <div className="content is-flex">
                                            <p className="project-description">
                                                <strong>{project.project}</strong> {project.description}
                                            </p>
                                            <div className="project-technologies">
                                                <p><strong>Technologies used:</strong> {project.technologies}</p>
                                                    <a href={project.link ? project.link : "javascript:;" }
                                                        className={project.link ? "is-flex github-container" : "is-flex github-container private"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa fa-github" aria-hidden="true"></i>
                                                        <span className="github-span">{project.status}</span>
                                                    </a>
                                            </div>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                )}

            </div>
        </div>
    </div>
)

export default Portfolio;
