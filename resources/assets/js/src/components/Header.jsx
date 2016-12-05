import React, { Component } from 'react';

import { Link } from 'react-router';

import '../../../sass/main.sass';

class Header extends Component {
    render() {
        return (
            <header className="header-color header">
                <div className="container">

                    <div className="columns border-me">

                        <div className="column is-half">
                            <li className="header-name">
                                <Link className="header-name-brand" to="/">CJ Sampson</Link>
                            </li>                    
                        </div>

                        <div className="column is-half header-pages-container">

                            <li className="header-list-item">
                                <Link className="header-name-link" to="about">About</Link>
                            </li>

                            <li className="header-list-item">
                                <Link className="header-name-link" to="portfolio">Portfolio</Link>
                            </li>

                            <li className="header-list-item">
                                <Link className="header-name-link" to="contact">Contact</Link>
                            </li>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;