import React, { Component } from 'react';

import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import HomePage from "./HomePage";
import Blog_grid from "./Blog_grid";
import Blog_post_page from "./Blog_post_page";
import Project_page from "./Project_page";
import Portfolio_grid from "./Portfolio_grid";

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/blog-grid" component={Blog_grid}/>
                    <Route exact path="/blog-post" component={Blog_post_page}/>
                    <Route exact path="/portfolio-grid" component={Portfolio_grid}/>
                    <Route exact path="/project" component={Project_page}/>
                </div>
            </Router>
        );
    }
}

export default App;