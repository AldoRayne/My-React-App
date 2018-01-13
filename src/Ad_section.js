import React, { Component } from 'react';
import My_btn from "./My_btn";

import './sass/sections/ad-section.css';

class Ad_section extends Component {
    render() {
        return (
            <section className="ad-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <p>Amber is the most metrolly WordPress theme ever created.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 button-move">
                            <My_btn text="Purchase now"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Ad_section;


