import React, { Component } from 'react';

import '../../../sass/footer.sass';

class Footer extends Component {
    render() {
        return (
            <section className="hero is-orange is-bold footer">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">

                                <div className="icon-container is-flex">
                                    <a className="footer-social is-flex contact" href="/contact">
                                        <span className="social-footer-span">Contact</span>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="icon-container is-flex">                            
                                    <a className="footer-social is-flex twitter" href="https://twitter.com/CJSampsonite">
                                        <span className="social-footer-span">Twitter</span>
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="icon-container is-flex">
                                    <a className="footer-social is-flex github" href="https://github.com/cjsampson">
                                        <span className="social-footer-span">Github</span>
                                        <i className="fa fa-github-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="column">
                                <div className="icon-container is-flex">
                                    <a className="footer-social is-flex linkedin" href="https://www.linkedin.com/in/christopher-sampson-3891b7b7">
                                        <span className="social-footer-span">LinkedIn</span>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;