import React, { Component } from 'react';

import { Link } from 'react-router';

import '../../../sass/main.sass';

class Header extends Component {
    render() {
        return (
            <section className="hero is-orange is-bold is-medium">
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-left">                                
                                <li className="nav-item">
                                    <Link className="header-name-brand" to="/">CJ Sampson</Link>
                                </li>                                
                            </div>
                            <span className="nav-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div className="nav-right nav-menu">
                                <li className="nav-item">
                                    <Link activeClassName="is-active" className="header-name-link" to="about">About</Link>
                                </li>

                                <li className="header-list-item">
                                    <Link activeClassName="is-active" className="header-name-link" to="portfolio">Portfolio</Link>
                                </li>

                                <li className="header-list-item">
                                    <Link activeClassName="is-active" className="header-name-link" to="contact">Contact</Link>
                                </li>
                            </div>
                        </div>
                    </header>
                </div>
            </section>
        )
    }
}

export default Header;