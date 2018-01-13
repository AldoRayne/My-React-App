import React, { Component } from 'react';

import './sass/sections/header.css';
import './sass/sections/section-header.css';

class Information_block extends Component {
    render() {
        return (
            <div className="container-fluid information">
                <div className="container">
                    <div className="row page-header">
                        <div className="col-6 d-flex align-items-end">
                            <div>
                                <h1>{this.props.name}</h1>
                                <ul className="d-flex">
                                    <li className="user-circle">by Alex Poushkin</li>
                                    <li className="clock-o">September 31</li>
                                    <li className="quote">12 Comments</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-end">
                            <p>Home  /  Shorcodes  /  Typography  /  Blog</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information_block;