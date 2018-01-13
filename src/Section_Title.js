import React, { Component } from 'react';

import './sass/content/section-title.css';
import './sass/content/section-description.css';


class Section_Title extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Section_Title;