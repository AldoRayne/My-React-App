import React, { Component } from 'react';
import Progress_bar from './Progress_bar';

import './sass/sections/company-exp-section.css';


class Company_exp extends Component {
    render() {
        return (
            <section className="company-exp">
                <div className="container">
                    <div className="row">
                        <h2 className="col-12 text-center">Company expirience</h2>
                    </div>
                    <ul className="row set-size">
                        <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                            <Progress_bar class="label gears" num="500" text="years of web development"/>
                        </li>
                        <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                            <Progress_bar class="label phone" num="25 000" text="results of the last winter year"/>
                        </li>
                        <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                            <Progress_bar class="label rocket" num="100 000" text="euros of the military budget"/>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Company_exp;
