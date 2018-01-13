import React, { Component } from 'react';

import Header from './Header';
import Information_block from "./Inforamtion_section";
import Main_blog from "./Main_blog";
import Footer from "./Site_footer";
import Comments_block from "./Comments_block";

class Blog_post_page extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Information_block name="Blog post title goes here"/>
                <Main_blog/>
                <Comments_block/>
                <Footer/>
            </div>
        );
    }
}

export default Blog_post_page;

