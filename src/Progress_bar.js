import React, { Component } from 'react';

import './sass/content/progress-bar.css';

const black_ellipse = require ('./images/black-ellipse.png');

class App extends Component {
    render() {
        return (
            <div className="pie-wrapper progress-95 style-2 text-center">
                            <span className={this.props.class}>
                                <img src={black_ellipse} width="100px" height="100px" alt=""/>
                            </span>
                <div className="pie">
                    <div className="left-side half-circle"></div>
                    <div className="right-side half-circle"></div>
                </div>
                <div className="shadow"></div>
                <p className="big-num">{this.props.num}</p>
                <p className="description">{this.props.text}</p>
            </div>
        );
    }
}

export default App;
