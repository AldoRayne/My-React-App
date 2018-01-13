import React, { Component } from 'react';

import './sass/active/button.css';

class My_btn extends Component {
    render() {
        return (
            <div>
                <button className="button" type="button" name="features"><a href="#">{this.props.text}</a></button>
            </div>
        );
    }
}

export default My_btn;