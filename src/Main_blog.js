import React, { Component } from 'react';

import './sass/content/main-blog.css';

const   main_img = require ('./images/placeimg_690_520_any.jpg'),
        place_img = require ('./images/placeimg_210_160_any-1.jpg'),
        place_img_1 = require ('./images/placeimg_210_160_any-2.jpg'),
        place_img_2 = require ('./images/placeimg_210_160_any-3.jpg'),
        place_img_3 = require ('./images/placeimg_210_160_any-1.jpg'),
        green_left = require ('./images/green-left.png'),
        green_right = require ('./images/green-right.png');

class Main_blog extends Component {
    render() {
        return (
            <section className="main-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
                            <section className="main-area-bottom-border">
                                <div className="blog-img">
                                    <img src={main_img} alt=""/>
                                </div>
                                <h3>These are the Americans that I know</h3>
                                <p>No health care? The market will fix it. I have come here to seek a new beginning between the
                                    United States and Muslims around the world; one based upon mutual interest and mutual respect;
                                    and one based upon the truth that America and Islam are not exclusive, and need not be in
                                    competition. On economic development, we will create a new corps of business volunteers to
                                    partner with counterparts in Muslim-majority countries. </p>
                                <blockquote>
                                    <p>
                                        Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at
                                        considerable distances and with no small facility.
                                    </p>
                                    <footer>
                                        <cite>— Moby-Dick, Herman Melville</cite>
                                    </footer>
                                </blockquote>
                                <p>Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing,
                                    kept showing up every day and working as hard as ever, because they knew there were people who
                                    counted on the brakes that they made.</p>
                                <h3>Michigan plant who, after they found</h3>
                                <p>It was closing, kept showing up every day and working as hard as ever, because they knew there
                                    were people who counted on the brakes that they made. Michigan plant who, after they found out
                                    it was closing, kept showing up every day and working as hard as ever, because. Tell that to the
                                    proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up
                                    every day and working as hard as ever, because they knew there were people who counted on the
                                    brakes that they made.</p>

                                <p>Michigan plant who, after they found out it was closing, kept showing up every day and working as
                                    hard as ever, because they knew there were people who counted on the brakes that they made.
                                    Michigan plant who, after they found out it was closing, kept showing up every day and working
                                    as hard as ever, because.</p>
                                <ul className="d-flex flex-wrap illustration">
                                    <li><img src={place_img} width="210px" height="160px" alt=""/></li>
                                    <li><img src={place_img_1} width="210px" height="160px" alt=""/></li>
                                    <li><img src={place_img_2} width="210px" height="160px" alt=""/></li>
                                </ul>
                                <p>Because they knew there were people who counted on the brakes that they made. Michigan plant who,
                                    after they found out it was closing, kept showing up every day and working as hard as ever,
                                    because they knew there were people who counted on the brakes that they made. Michigan plant
                                    who, after they found out it was closing, kept showing up every day and working as hard as ever,
                                    because.</p>
                                <p>Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing,
                                    kept showing up every day and working as hard as ever, because they knew there were people who
                                    counted on the brakes that they made.</p>
                            </section>
                            <div className="tags">
                                <p>Tags: <a href="#">amber</a>, <a href="#">dance</a>, <a href="#">fashion</a>, <a
                                    href="#">sultan</a>,
                                    <a href="#">onmouseover tag</a></p>
                            </div>
                            <ul className="related-posts d-flex justify-content-between flex-wrap">
                                <li>
                                    <p>June 24</p>
                                    <a href="#">The hope of a young naval lieutenant bravely patrolling</a>
                                </li>
                                <li>
                                    <p>August 8</p>
                                    <a href="#">Politicians routinely exploited fears of crime Christian Coalition</a>
                                </li>
                                <li>
                                    <p>August 13</p>
                                    <a href="#">There was even a time when the Christian Coalition determined that its number
                                        one</a>
                                </li>
                            </ul>
                        </div>
                        <aside className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                            <section className="blog-categories">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Creative portfolio</a></li>
                                    <li><a href="#">Onmouseover category</a></li>
                                    <li><a href="#">Amber golden</a></li>
                                    <li><a href="#">Amsterdam fight gear</a></li>
                                    <li><a href="#">Creamy cucumber</a></li>
                                </ul>
                            </section>
                            <section className="recent-comments">
                                <h3>Recent Comments</h3>
                                <ul>
                                    <li>
                                        <p>Igor Ligay on</p>
                                        <a href="#">The hope of a young naval lieutenant bravely patrolling</a>
                                    </li>
                                    <li>
                                        <p>Farhad Yusupov on</p>
                                        <a href="#">Politicians routinely exploited fears of crime</a>
                                    </li>
                                    <li>
                                        <p>
                                            John Doe on</p>
                                        <a href="#">There was even a time when the Christian Coalition determined that its number
                                            one </a>
                                    </li>
                                </ul>
                            </section>
                            <section className="latest-works">
                                <h3>Latest Works</h3>
                                <a href="#">
                                    <img src={place_img_3} width="210px" height="160px" alt=""/>
                                </a>
                                <div className="d-flex justify-content-center">
                                    <button type="button" name="left-btn"><img src={green_left}/></button>
                                    <button type="button" name="right-btn"><img src={green_right}/></button>
                                </div>
                            </section>
                            <section className="tag-cloud">
                                <h3>Teg Cloud</h3>
                                <ul className="d-flex flex-wrap">
                                    <li><a href="#">bad boy</a></li>
                                    <li><a href="#">winter</a></li>
                                    <li><a href="#">is coming</a></li>
                                    <li><a href="#">south</a></li>
                                    <li><a href="#">mouseover</a></li>
                                    <li><a href="#">asia</a></li>
                                    <li><a href="#">surfing</a></li>
                                    <li><a href="#">iceland</a></li>
                                    <li><a href="#">she</a></li>
                                    <li><a href="#">china</a></li>
                                    <li><a href="#">daytona</a></li>
                                </ul>
                            </section>
                        </aside>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main_blog;

