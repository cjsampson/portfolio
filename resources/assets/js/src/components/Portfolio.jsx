import React, { Component } from 'react';

import '../../../sass/portfolio.sass';

export default class Portfolio extends Component {
    render() {
        return (
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
                                        <div className="media-content is-flex media-flex">
                                            <div className="content is-flex">
                                                <p className="project-description">
                                                    <strong>Blueline Screening Source</strong> is a large, enterprise drug testing software.  I was tasked with building a user-based role system for the admin and client portals for access restriction.  The software had a complex backend with a large amount of sql tables.
                                                </p>
                                                <div className="project-technologies">
                                                    <p><strong>Technologies used:</strong> Laravel Framework, Twitter Bootstrap, AJAX, Datatables, jQuery, Sequel Pro, NPM, Gulp, Vagrant, Ansible</p>
                                                    <a href="#" className="is-flex github-container">
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

                        <div className="box portfolio">
                            <article className="media">

                                <div className="columns">

                                    <div className="column is-5 is-flex image-column">
                                        <div className="media-left is-flex">
                                            <figure className="image-container">
                                                <img src="/images/tandc.png" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="column is-7">
                                        <div className="media-content is-flex media-flex">
                                            <div className="content is-flex">
                                                <p className="project-description">
                                                    <strong>TandC</strong> is an application that has all sorts of resources from videos to articles all co-created by yours truely.  TandC uses Laravel for the backend while utilizing the Bulma CSS framework for layout/templating, jQuery for DOM maniputaion and user interaction, and many more open-source libraries.
                                                </p>

                                                <div className="project-technologies">
                                                    <p><strong>Technologies used:</strong> Laravel Framework, SASS (CSS), jQuery, Bulma Framework, NPM, Gulp, Homestead</p>
                                                    <a href="#" className="is-flex github-container">
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

                        <div className="box portfolio">
                            <article className="media">

                                <div className="columns">

                                    <div className="column is-5 is-flex image-column">
                                        <div className="media-left is-flex">
                                            <figure className="image-container">
                                                <img src="/images/sweetyams.png" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="column is-7">
                                        <div className="media-content is-flex media-flex">
                                            <div className="content is-flex">
                                                <p className="project-description">
                                                    <strong>Sweet Yams</strong> was a project that I was a part of for a local, organic restaurant.  The application had a CRUD build for the restaurant owners to update the menu.  Another big feature built for the application was the menu and ordering system.
                                                </p>
                                                
                                                <div className="project-technologies">
                                                    <p><strong>Technologies used:</strong> Laravel Framework, Twitter Bootstrap, jQuery, Custom Flexbox, Vue.js, NPM, Gulp, Bower, Browsersync</p>
                                                    <a href="https://github.com/thesweetyams/sweetyams" className="is-flex github-container">
                                                        <i className="fa fa-github" aria-hidden="true"></i>
                                                        <span className="github-span">Github</span>
                                                    </a>
                                                </div>
                                            </div>                  
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="box portfolio">
                            <article className="media">

                                <div className="columns">

                                    <div className="column is-5 is-flex image-column">
                                        <div className="media-left is-flex">
                                            <figure className="image-container">
                                                <img src="/images/wackamole.png" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="column is-7">
                                        <div className="media-content is-flex media-flex">
                                            <div className="content is-flex">
                                                <p className="project-description">
                                                    <strong>Whack-a-mole</strong> is a fun jQuery focused web game that has a basic score counter and random images that pop up on click.
                                                </p>
                                                
                                                <div className="project-technologies">
                                                    <p><strong>Technologies used:</strong> HTML, CSS, JavaScript, jQuery</p>
                                                    <a href="https://github.com/cjsampson/Whack-a-Mole" className="is-flex github-container">
                                                        <i className="fa fa-github" aria-hidden="true"></i>
                                                        <span className="github-span">Github</span>
                                                    </a>
                                                </div>
                                            </div>                  
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="box portfolio">
                            <article className="media">

                                <div className="columns">

                                    <div className="column is-5 is-flex image-column">
                                        <div className="media-left is-flex">
                                            <figure className="image-container">
                                                <img src="/images/paramount.png" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="column is-7">
                                        <div className="media-content is-flex media-flex">
                                            <div className="content is-flex">
                                                <p className="project-description">
                                                    <strong>Paramount Accounting</strong> is an accounting software to provide efficiency to a local Taxing business.  Roles performed for this project were to implement BDD using the Selenium Driver and Behat to provide Behavioral test in the browser.  Also a user-restriction feature was implemented to restrict user's from accesing certain features of the software.
                                                </p>
                                                
                                                <div className="project-technologies">
                                                    <p><strong>Technologies used:</strong> HTML, CSS, JavaScript, jQuery, AJAX, Behat, BDD, Mink Extension, NPM, Bootstrap</p>
                                                    <a href="#" className="is-flex github-container">
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

                        <div className="box portfolio">
                            <article className="media">

                                <div className="columns">

                                    <div className="column is-5 is-flex image-column">
                                        <div className="media-left is-flex">
                                            <figure className="image-container">
                                                <img src="/images/portfolio.png" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="column is-7">
                                        <div className="media-content is-flex media-flex">
                                            <div className="content is-flex">
                                                <p className="project-description">
                                                    <strong>cjsampson.me</strong> is an application to host the projects that I have both built and been a team member of.  This app exercised my knowledge of React and functional programming to help better understand the core components of React.
                                                </p>
                                                
                                                <div className="project-technologies">
                                                    <p><strong>Technologies used:</strong> HTML, CSS, Sass, JavaScript, Bulma, React, NPM, Webpack</p>
                                                    <a href="#" className="is-flex github-container">
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
    }
}