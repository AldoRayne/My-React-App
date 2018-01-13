import React, { Component } from 'react';

class Feature_item extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Feature_item;
