import React, { Componet } from 'react';
import ReactDOM, {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';


import App from './components/App';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const Index = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)

ReactDOM.render(<Index />, document.getElementById('app'));