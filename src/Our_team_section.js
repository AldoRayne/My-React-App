import React, { Component } from 'react';
import Our_team_list_item from "./Our_team_list_item";

import './sass/sections/our-team-section.css';

const placeimg_1 = require ('./images/placeimg_210_280-1.jpg'),
      placeimg_2 = require ('./images/placeimg_210_280-2.jpg'),
      placeimg_3 = require ('./images/placeimg_210_280-3.jpg'),
      placeimg_4 = require ('./images/placeimg_210_280-4.jpg');

class Our_team_section extends Component {
    render() {
        return (
            <section className="our-team-section">
                <div className="container">
                    <div className="row">
                        <h2 className="col-12 text-center">Our team</h2>
                    </div>
                    <ul className="d-flex justify-content-between flex-wrap">
                        <li>
                            <Our_team_list_item src={placeimg_1} name="Manny Delgado" post="a little boy"
                                                text="Be who you are and say what you feel, because those who mind don't matter."/>
                        </li>
                        <li>
                            <Our_team_list_item src={placeimg_2} name="Manny Delgado" post="a little boy"
                                                text="Be who you are and say what you feel, because those who mind don't matter."/>
                        </li>
                        <li>
                            <Our_team_list_item src={placeimg_3} name="Manny Delgado" post="a little boy"
                                                text="Be who you are and say what you feel, because those who mind don't matter."/>
                        </li>
                        <li>
                            <Our_team_list_item src={placeimg_4} name="Manny Delgado" post="a little boy"
                                                text="Be who you are and say what you feel, because those who mind don't matter."/>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Our_team_section;


