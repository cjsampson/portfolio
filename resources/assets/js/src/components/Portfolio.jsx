import React, { Component } from 'react';

import '../../../sass/portfolio.sass';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-three-quarters">
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image-container">
                                    <img src="/images/bl.png" alt="Image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p className="project-description"><strong>Blueline Screening Source</strong> is a large, enterprise drug testing software.  I was tasked with building a user-based role system for the admin and client portals for access restriction.  The software had a complex backend with a large amount of sql tables.</p>
                                    <div className="project-technologies">
                                        <p><strong>Technologies used:</strong> Laravel Framework, Twitter Bootstrap, jQuery, Sequel Pro, NPM, Gulp, Vagrant</p>
                                    </div>
                                </div>                  
                            </div>
                        </article>
                    </div>

                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image-container">
                                    <img src="/images/tandc.png" alt="Image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p className="project-description"><strong>TandC</strong> is an application that has all sorts of resources from videos to articles all co-created by yours truely.  TandC uses Laravel for the backend while utilizing the Bulma CSS framework for layout/templating, jQuery for DOM maniputaion and user interaction, and many more open-source libraries.</p>
                                </div>
                                <div className="technologies-used">
                                    <p className="project-technologies"><strong>Technologies used:</strong> Laravel Framework, Twitter Bootstrap, jQuery, Bulma Framework, NPM, Gulp, Homestead</p>
                                </div>                  
                            </div>
                        </article>
                    </div>                    
                </div>
            </div>
        )
    }
}