import React, { Component } from 'react';

import './sass/sections/site-footer.css';

const map = require ('./images/map.png');

class Footer extends Component {
    render() {
        return (
            <section className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 violet">
                            <h3>Get in touch</h3>
                            <ul className="d-flex flex-column justify-content-start get-in-touch">
                                <li className="flag"><span>Address:</span> 321 Street Name, United Kingdom, London</li>
                                <li className="call"><span>Phone:</span> +7 998 71 150 30 20</li>
                                <li className="mail"><span>Email:</span> info@ambertheme.com</li>
                                <li><a href="#"><img src={map} width="210px" height="150px" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 blue">
                            <h3>Latest tweets</h3>
                            <ul className="d-flex flex-column justify-content-start latest-tweets">
                                <li className="latest-tweets">CMS Masters And Their Best Web Design Tools <a href="#">#bestwebdesigntools</a>
                                    <a href="#">#webdesign</a>
                                    <p>— about 12 min ago</p>
                                </li>
                                <li className="latest-tweets">WOOCOMMERCE functionality added!!! See Industrial theme become even
                                    powerful! - <a href="#">bit.ly/industrial-wp</a>
                                    <p>— about 47 days ago</p>
                                </li>
                                <li className="latest-tweets">CMS Masters And Their Best Web Design Tools <a href="#">#bestwebdesigntools</a>
                                    <a href="#">#webdesign</a>
                                    <p>— about 12 min ago</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 red">
                            <h3>Follow us</h3>
                            <ul className="d-flex flex-column justify-content-start follow">
                                <li><a className="follow-fb" href="#">Like us on Facebook</a></li>
                                <li><a className="follow-twitt" href="#">Follow us on Twitter</a></li>
                                <li><a className="follow-u2b" href="#">Watch videos on YouTube</a></li>
                                <li><a className="follow-inst" href="#">Friend us on Instagram</a></li>
                                <li><a className="follow-pint" href="#">Repin on Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 orange">
                            <h3>Popular Posts</h3>
                            <ul className="d-flex flex-column justify-content-start popular-posts">
                                <li>
                                    <p>September, 30</p>
                                    <a href="#">Candy canes dragée pudding. Donut cheesecake I love chocolate icing</a>
                                </li>
                                <li>
                                    <p>April, 22</p>
                                    <a href="#">Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</a>
                                </li>
                                <li>
                                    <p>
                                        May, 12</p>
                                    <a href="#">WCotton candy muffin tart gummies candy danish liquorice chupa chups tootsie
                                        roll</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <footer className="d-flex justify-content-between align-items-center">
                        <p>© 2014 StylemixThemes. All rights reserved.
                            Powered by WordPress.</p>
                        <div>
                            <button className="button" type="button"><a href="#top-page">Back to top page</a></button>
                        </div>
                    </footer>
                </div>
            </section>
        );
    }
}

export default Footer;

