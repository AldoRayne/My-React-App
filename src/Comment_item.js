import React, { Component } from 'react';

class Comment_item extends Component {
    render() {
        return (
            <div>
                <div className="middle-border">
                    <div className="d-flex justify-content-between">
                        <a href="#">Administrator</a>
                        <a href="#">Reply</a>
                    </div>
                    <p className="time">September 17, 2013 @ 1:38 pm</p>
                </div>
                <p>Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth
                    bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit
                    cornhole, occaecat put a bird on it single-origin coffee Tonx. Small batch 3 wolf moon
                    ad, adipisicing fap cornhole.</p>
            </div>
        );
    }
}

export default Comment_item;

