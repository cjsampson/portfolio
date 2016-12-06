import React, { Component } from 'react';

import { Link } from 'react-router';

import '../../../sass/main.sass';

const ToggledNav = () => {
    return (
        <div>
            Toggled Nav
        </div>
    );
}

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleHamburgerClick = () => {
        console.log('toggled');
        this.setState({ open: !this.state.open});
    }
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
                            { this.state.open ? <ToggledNav /> : null }
                            <span className="nav-toggle" onClick={this.handleHamburgerClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            
                            <div className="nav-right nav-menu">

                                <li className="header-list-item">
                                    <Link activeClassName="is-active" className="header-name-link" to="portfolio">Portfolio</Link>
                                </li>

                                <li className="header-list-item">
                                    <Link activeClassName="is-active" className="header-name-link" to="resume">Resume</Link>
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