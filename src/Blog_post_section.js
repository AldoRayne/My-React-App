import React, { Component } from 'react';
import Section_Title from "./Section_Title";
import Blog_post_item from "./Blog_post_item";

import './sass/sections/blog-posts-section.css';
import './sass/content/blog-post.css';

const placeimg_1 = require ('./images/placeimg_290_220-1.jpg'),
      placeimg_2 = require ('./images/placeimg_290_220-2.jpg'),
      placeimg_3 = require ('./images/placeimg_290_220-3.jpg');


class Blog_post extends Component {
    render() {
        return (
            <section className="blog-posts-section">
                <div className="container">
                    <div className="text-center">
                        <Section_Title title="Latest blog posts"/>
                    </div>
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
                    </ul>
                </div>
            </section>
        );
    }
}

export default Blog_post;


