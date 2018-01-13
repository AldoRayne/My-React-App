import React, { Component } from 'react';

import './sass/body/containers.css';

import Header from './Header';
import Welcome from './Welcome';
import Month_Steal from './Month_Steal';
import Works from "./Works";
import Ad_section from "./Ad_section";
import Features from "./Features";
import Quote_section from "./Quote_section";
import Blog_post from "./Blog_post_section";
import Company_exp from "./Company_exp";
import Our_team_section from "./Our_team_section";
import Footer from "./Site_footer";

class HomePage extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Welcome/>
            <Month_Steal/>
            <Works/>
            <Ad_section/>
            <Features/>
            <Quote_section/>
            <Blog_post/>
            <Company_exp/>
            <Our_team_section/>
            <Footer/>
        </div>
    );
  }
}

export default HomePage;
