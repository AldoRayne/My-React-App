import React, {Component} from 'react';

import './sass/sections/project-block.css';

import My_btn from './My_btn';

const place_img = require ('./images/placeimg_690_900_any.jpg'),
      place_img_1 = require ('./images/placeimg_690_900_any-2.jpg'),
      place_img_2 = require ('./images/placeimg_690_900_any-3.jpg');

class Project_block extends Component {
    render() {
        return (
            <section className='project-block'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-7 col-md-7 col-sm-7'>
                            <div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
                                <div className='carousel-inner' role='listbox'>
                                    <div className='carousel-item active'>
                                        <img className='d-block img-fluid' src={place_img} alt='First slide'/>
                                    </div>
                                    <div className='carousel-item'>
                                        <img className='d-block img-fluid' src={place_img_1} alt='Second slide'/>
                                    </div>
                                    <div className='carousel-item'>
                                        <img className='d-block img-fluid' src={place_img_2} alt='Third slide'/>
                                    </div>
                                </div>
                                <a className='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
                                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                                    <span className='sr-only'>Previous</span>
                                </a>
                                <a className='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
                                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                                    <span className='sr-only'>Next</span>
                                </a>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-5 col-md-5 col-sm-5'>
                            <div>
                                <a href='#'>
                                    <img src='images/button-left.png' width='40px' height='40px' alt=''/>
                                        <img src='images/button-right.png' width='40px' height='40px' alt=''/>
                                </a>
                            </div>
                            <p className='likes'>257</p>
                            <div className='project-description'>
                                <section>
                                    <h4 className='project-theme'>Art Direction, Web Design</h4>
                                    <p>Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie
                                        lollipop sesame snaps bear claw sweet roll sweet I love soufflé.</p>
                                    <p>Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon
                                        unerdwear.
                                    </p>
                                </section>
                                <section className='work-description'>
                                    <h4>Work description</h4>
                                    <ul>
                                        <li>Brownie ice cream carrot</li>
                                        <li>Carrot cake apple pie</li>
                                        <li>Love applicake I love</li>
                                        <li>Chocolate bar pudding</li>
                                    </ul>
                                </section>
                            </div>
                            <My_btn text='Buy now'/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project_block;