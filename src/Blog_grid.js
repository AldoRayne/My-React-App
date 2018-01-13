import React, { Component } from 'react';

import './sass/body/containers.css';

import Header from './Header';
import Footer from "./Site_footer";
import Information_block from "./Inforamtion_section";
import Blog_grid_list from "./Blog_grid_list";

class Blog_grid extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Information_block name="Blog grid view"/>
                <Blog_grid_list/>
                <Footer/>
            </div>
        );
    }
}

export default Blog_grid;

