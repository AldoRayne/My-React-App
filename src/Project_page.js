import React, {Component} from 'react';

import Header from './Header';
import Information_block from "./Inforamtion_section";
import Footer from "./Site_footer";
import Project_block from "./Project_block";

class Project_page extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Information_block name="Project title"/>
                <Project_block/>
                <Footer/>
            </div>
        );
    }
}

export default Project_page;