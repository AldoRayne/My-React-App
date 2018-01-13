import React, { Component } from 'react';
import Section_Title from "./Section_Title";
import Work_item from "./Work_item";

import './sass/sections/works.css';
import './sass/content/portfolio-list.css';

const placeimg_1 = require ('./images/placeimg_290_290-1.jpg'),
      placeimg_2 = require ('./images/placeimg_290_290-2.jpg'),
      placeimg_3 = require ('./images/placeimg_290_290-3.jpg');


class Works extends Component {
    render() {
        return (
            <section className="works portfolio-list">
                <div className="container">
                    <header className="row text-center">
                        <div className="col-12">
                            <Section_Title title="Latest works" text="That we can tuck in our children at night and know
                                that they are fed and clothed and safe from harm. Our trials and triumphs became at once
                                unique and universal."/>
                        </div>
                    </header>
                    <ul className="row">
                        <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="item-list">
                                <Work_item src={placeimg_1} name="Lindemans Wine" post="Art Direction, Web Design" num="257" alt=""/>
                            </div>

                        </li>
                        <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="item-list">
                                <Work_item src={placeimg_2} name="Lindemans Wine" post="Art Direction, Web Design" num="257" alt=""/>
                            </div>
                        </li>
                        <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="item-list">
                                <Work_item src={placeimg_3} name="Lindemans Wine" post="Art Direction, Web Design" num="257" alt=""/>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Works;





