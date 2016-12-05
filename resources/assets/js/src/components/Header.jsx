import React, { Component } from 'react';

import { Link } from 'react-router';

import '../../../sass/main.sass';

class Header extends Component {
    render() {
        return (
            <header className="header-color">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-flex">
                            <li className="header-name header-list-item">
                                <Link className="header-name-link" to="/">CJ Sampson</Link>
                            </li>                    
                            <li className="header-list-item">
                                <Link className="" to="/">Home</Link>
                            </li>
                            <li className="header-list-item">
                                <Link className="" to="about">About</Link>
                            </li>
                            <li className="header-list-item">
                                <Link className="" to="portfolio">Portfolio</Link>
                            </li>
                            <li className="header-list-item">
                                <Link className="" to="contact">Contact</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;