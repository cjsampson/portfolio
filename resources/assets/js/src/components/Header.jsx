import React, { Component } from 'react';
import classNames from 'classnames';

import { Link } from 'react-router';

import '../../../sass/main.sass';

const ToggledNav = () => {
    return (
        <div className="nav-menu nav-right">
            <Link className="nav-item dropdown-item" to="/" onClick={this.handleHamburgerClick}>Home</Link>
            <Link className="nav-item dropdown-item" to="portfolio" onClick={this.handleHamburgerClick}>Portfolio</Link>
            <Link className="nav-item dropdown-item" to="resume" onClick={this.handleHamburgerClick}>Resume</Link>
            <Link className="nav-item dropdown-item" to="contact" onClick={this.handleHamburgerClick}>Contact</Link>
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

    hamburgerClassName = () => 
        classNames({
            'is-active':  this.state.open,
            'nav-toggle': true
        })

    handleHamburgerClick = () => {
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
                            <span className={this.hamburgerClassName()} onClick={this.handleHamburgerClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            
                            <div className="is-active nav-right nav-menu">

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