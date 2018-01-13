import React, { Component } from 'react';
import My_btn from "./My_btn";

class Our_team_list_item extends Component {
    render() {
        return (
            <div>
                <div className="holder">
                    <img src={this.props.src} width="210px" height="280px" alt=""/>
                    <div className="hidden-block">
                        <div className="double-inner-block">
                            <p>{this.props.name}</p>
                            <p>{this.props.post}</p>
                        </div>
                        <p>{this.props.text}</p>
                    </div>
                </div>
                    <My_btn text="Profile"/>
            </div>

        );
    }
}

export default Our_team_list_item;