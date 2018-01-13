import React, {Component} from 'react';

import './sass/sections/month-steal.css';

import My_btn from "./My_btn";
import Section_Title from "./Section_Title";

class Month_Steal extends Component {
    render() {
        return (
            <div>
                <section className="month-steal text-center">
                    <div className="container">
                        <header className="row text-center">
                            <div className="col-12">
                                <Section_Title title="Steal of the month" text="That we can tuck in our children at
                                    night and know that they are fed and clothed and safe from harm. Our trials and
                                    triumphs became at once unique and universal."/>
                            </div>
                        </header>
                        <footer className="row">
                            <div className="col-12">
                                <My_btn text="Purchase Now"/>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
        );
    }
}

export default Month_Steal;



