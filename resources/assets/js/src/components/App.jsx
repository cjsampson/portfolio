import React, { Component } from 'react';

import { Link } from 'react-router';

import Header from './Header';
import Footer from './Footer';


class App extends Component {
    render(){
        return(
            <div>
                <Header />
                
                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-faded">                        
                        <a className="navbar-brand" href="#">CJ Sampson's Portfolio</a>
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                <div className="container">
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}


export default App;