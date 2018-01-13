import React, { Component } from 'react';

import './sass/active/nav-bar.css';
import './sass/sections/header.css';

const loop = require ('./images/loop.png'),
      logo = require ('./images/site-logo.png');

class App extends Component {
    render() {
        return (
            <header id="top-page" className="head nav-bar-comp">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-xl-6">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"/>
                                        <span className="input-group-btn">
                                <button className="btn" type="button">
                                    <img src={loop} alt="" width="14px" height="13px"/>
                                </button>
                            </span>
                                    </div>
                                </form>
                            </div>
                            <div className="authorization-btn col-sm-6 col-md-6 col-xl-6">
                                <button type="button" name="login">Login</button>
                                <button type="button" name="register">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-secondary d-flex align-items-stretch">
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="" width="130px" height="48px"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav justify-content-between align-items-stretch text-center">
                                    <li className="nav-item yellow">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item orange">
                                        <a className="nav-link" href="#">Typography</a>
                                    </li>
                                    <li className="nav-item crimson">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item violet">
                                        <a className="nav-link" href="#">Pages</a>
                                    </li>
                                    <li className="nav-item purple">
                                        <a className="nav-link" href="#">Elements</a>
                                    </li>
                                    <li className="nav-item midnight">
                                        <a className="nav-link" href="#">Ecomerse</a>
                                    </li>
                                    <li className="nav-item blue">
                                        <a className="nav-link" href="#">Mega Menu</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default App;
