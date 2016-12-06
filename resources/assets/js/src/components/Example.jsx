import React from 'react';

var Menu = require('react-burger-menu').slide;

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/portfolio">Portfolio</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}