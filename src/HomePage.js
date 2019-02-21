import React, { Component } from 'react';
import ResearchPage from './ResearchPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import AwardsPage from './AwardsPage';
import VideosPage from './VideosPage';
import FoundersPage from './FoundersPage';

class HomePage extends Component {

    render() { 
        return (
            <div>
                <div class="home-container">
                    <span class="img-text">Conveying the Visual World through Sound</span>
                    <img class="home-img" src="/RNSS_background2.jpg" ></img>
                </div>
                <div>
                    <AboutPage/>
                    <ResearchPage/>
                    <AwardsPage/>
                    <VideosPage/>
                    <FoundersPage />
                    <ContactPage/>
                    <br/>
                </div>    
            </div>
        );

    }
}
 
export default HomePage;