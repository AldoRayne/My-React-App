import React, { Component } from 'react';

import Blog_post_item from "./Blog_post_item";

import './sass/sections/blog-posts-section.css';
import './sass/content/blog-post.css';
import './sass/content/pages-list.css';

const placeimg_1 = require ('./images/placeimg_290_220-1.jpg'),
    placeimg_2 = require ('./images/placeimg_290_220-2.jpg'),
    placeimg_3 = require ('./images/placeimg_290_220-3.jpg');


class Blog_grid_list extends Component {
    render() {
        return (
            <section className="blog-posts-section">
                <div className="container">
                    <ul className="d-flex justify-content-between flex-wrap blog-post">
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_1}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_2}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_3}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_1}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_2}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_3}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_1}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_2}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                        <li className="blog-post-item">
                            <Blog_post_item src={placeimg_3}
                                            title="Runway to Red Carpet: Awards Season"
                                            text="Her father worked on oil rigs and farms that through most of the
                                                  Depression. But it is a new story hat has seared into my genetic."
                                            num=" 450"
                                            alt=""/>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="d-flex justify-content-center pages-list">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">7</a></li>
                            <li>...</li>
                            <li><a href="#">2015</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog_grid_list;


