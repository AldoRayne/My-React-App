import React, { Component } from 'react';

import './sass/sections/portfolio-block.css';
import './sass/content/categories.css';

import Header from './Header';
import Information_block from "./Inforamtion_section";
import Footer from "./Site_footer";
import Portfolio_grid_list from "./Portfolio_grid_list";


class Portfolio_grid extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Information_block name="Portfolio grid gallery"/>
                <section className="portfolio-block">
                    <div className="container">
                        <p>Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop
                            sesame snaps bear claw sweet roll sweet I love soufflé. Caramels powder gummies pudding danish sesame snaps.
                            Sweet roll caramels fruitcake bonbon unerdwear.com brownie ice cream carrot cake. Carrot cake apple pie
                            gummies I love applicake I love I love chocolate bar pudding.
                        </p>
                        <ul className="categories d-flex justify-content-start">
                            <li><a href="#">View all</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Photos</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Apps</a></li>
                            <li><a href="#">Poison</a></li>
                        </ul>
                    </div>
                    <Portfolio_grid_list/>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Portfolio_grid;


