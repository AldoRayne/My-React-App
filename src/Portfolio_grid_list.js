import React, { Component } from 'react';
import Work_item from "./Work_item";

const   placeimg_1 = require ('./images/placeimg_290_290-1.jpg'),
        placeimg_2 = require ('./images/placeimg_290_290-2.jpg'),
        placeimg_3 = require ('./images/placeimg_290_290-3.jpg');

class Portfolio_grid_list extends Component {
    render() {
        return (
            <div>
                <section className="portfolio-list">
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
                        </li><li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
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
                </section>
                <div className="d-flex justify-content-center"><button type="button" className="btn btn-link">Show more images</button></div>
            </div>
        );
    }
}

export default Portfolio_grid_list;


