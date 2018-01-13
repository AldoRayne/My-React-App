import React, { Component } from 'react';

import './sass/sections/comments-section.css';

class Quote_section extends Component {
    render() {
        return (
            <section className="comments-section">
                <div className="container">
                    <div className="row">
                        <blockquote className="col-12 text-center">
                            <p>
                                Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at
                                considerable
                                distances and with no small facility.
                            </p>
                            <footer className="col-12">
                                <cite>
                                    <p>— Moby-Dick, Herman Melville</p>
                                </cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quote_section;



