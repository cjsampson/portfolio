import React, { Component } from 'react';

import { IndexLink, Link } from 'react-router';


class App extends Component {
    render(){
            return(
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Scotch Cars</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    {/* Change from a to Link */}
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/cars">Cars</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            );
        )
    }
}


export default App;