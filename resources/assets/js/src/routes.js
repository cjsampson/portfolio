import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

export default (
    <Route path="/" component={App}>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound}/>
    </Route>
);