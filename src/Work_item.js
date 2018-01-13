import React, {Component} from 'react';

const ellipse_heart = require ('./images/ellipse-heart.png'),
      ellipse_loop = require ('./images/ellipse-loop.png'),
      ellipse_link = require ('./images/ellipse-link.png'),
      heart_icon = require ('./images/heart-icon.png');

class Work_item extends Component {
    render() {
        return (
            <div>
                <img src={this.props.src} width="290px" height="290px" alt={this.props.alt}/>
                <div className="inner-links">
                    <a href="#"><img src={ellipse_heart} width="40px" height="40px" alt=""/></a>
                    <a href="#"><img src={ellipse_loop} width="40px" height="40px" alt=""/></a>
                    <a href="#"><img src={ellipse_link} width="40px" height="40px" alt=""/></a>
                </div>
                <div className="list-inner">
                    <p>{this.props.name}<img src={heart_icon} width="14px" height="12px" alt=""/></p>
                    <p>{this.props.post}<span>{this.props.num}</span></p>
                </div>
            </div>
        );
    }
}

export default Work_item;
