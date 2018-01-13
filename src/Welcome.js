import React, { Component } from 'react';

import './sass/sections/welcome-section.css';
import My_btn from "./My_btn";

const welcome_img_1 = require ('./images/welcome-img-1.jpg'),
      welcome_img_2 = require ('./images/welcome-img-2.jpg'),
      welcome_img_3 = require ('./images/welcome-img-3.jpg');

class Welcome extends Component {
    render() {
        return (
            <section className="welcome-section d-flex flex-column justify-content-center">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="" src={welcome_img_1} width="1680px" height="950px" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="" src={welcome_img_2} width="1680px" height="950px" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={welcome_img_3} width="1680px" height="950px"
                                 alt="Third slide"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Creating a unique look
                                <span>Never been easier.</span></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 d-flex justify-content-end">
                            <My_btn text="See features"/>
                        </div>
                        <div className="col-6">
                            <My_btn text="Purchase Now"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcome;


