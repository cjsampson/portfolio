import React, { Componet } from 'react';
import ReactDOM, {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';


import App from './components/App';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

const Index = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/resume" component={Resume}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)

ReactDOM.render(<Index />, document.getElementById('app'));