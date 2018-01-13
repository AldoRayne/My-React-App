import React, { Component } from 'react';

const comment_img = require ('./images/comments.png');

class Blog_post_item extends Component {
    render() {
        return (
            <div>
                <img src={this.props.src} width="290px" height="220px" alt={this.props.alt}/>
                <a href="#"><h3>{this.props.title}</h3></a>
                <p>{this.props.text}</p>
                <a href="#"><p>Learn more <span><img src={comment_img} width="19px" height="14px" alt=""/>{this.props.num}</span></p></a>
            </div>
        );
    }
}

export default Blog_post_item;


