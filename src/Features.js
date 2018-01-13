import React, { Component } from 'react';
import Section_Title from "./Section_Title";
import Feature_item from "./Feature_item";

import './sass/sections/features.css';


class Features extends Component {
    render() {
        return (
            <section className="features">
                <div className="container">
                    <div className="text-center">
                        <Section_Title title="Superb features"/>
                    </div>
                    <ul className="row">
                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 star">
                            <Feature_item title="Brilliant creative design" text="Ah, well! It means much the same thing,
                              said the Duchess, digging her sharp little chin into Alice's shoulder as she added, and the
                              moral of that is m-dash."/>
                        </li>
                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 challece">
                            <Feature_item title="On mouse over title" text="AThen they both bowed low, and their curls
                                got entangled together. Alice laughed so much at this, that she had to run back into the
                                wood for fear of their hearing her."/>

                        </li>
                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 pan">
                            <Feature_item title="Incredible documentation" text="Alice went timidly up to the door, and
                                knocked. 'There's no sort of use in knocking,' said the Footman', and that for two reasons."/>

                        </li>
                        <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12 cloud">
                            <Feature_item title="Responsive & retina ready" text="Alice went timidly up to the door, and
                                knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two
                                reasons. First, because I'm on the same side."/>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Features;


