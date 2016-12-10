import React, { Component } from 'react';
import classNames from 'classnames';


import { Link } from 'react-router';

import '../../../sass/main.sass';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    hamburgerClassNames = () => 
        classNames({
            'is-active':  this.state.open,
            'nav-toggle': true
        })

    dropDownClassNames = () => 
        classNames({
            'nav-menu': true,
            'nav-right': true,
            'is-active': this.state.open
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
                            
                            <span className={this.hamburgerClassNames()} onClick={this.handleHamburgerClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            
                            <div className={this.dropDownClassNames()}>
                                <li className="header-list-item">
                                    <Link 
                                        activeClassName="is-active" 
                                        className="header-name-link" 
                                        to="portfolio"
                                        onClick={this.handleHamburgerClick}
                                    >
                                        Portfolio
                                    </Link>
                                </li>

                                <li className="header-list-item">
                                    <Link 
                                        activeClassName="is-active" 
                                        className="header-name-link" 
                                        to="resume"
                                        onClick={this.handleHamburgerClick}
                                    >
                                        Resume
                                    </Link>
                                </li>

                                <li className="header-list-item">
                                    <Link 
                                        activeClassName="is-active" 
                                        className="header-name-link" 
                                        to="contact" 
                                        onClick={this.handleHamburgerClick}
                                    >
                                        Contact
                                    </Link>
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