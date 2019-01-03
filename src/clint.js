import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReacrRouter from 'react-router';
import HomePage from './HomePage';
import NavigationBar from './NavigationBar'
import AboutPage from './AboutPage'
import Subscribe from './Subscribe'
import AboutVideo from './AboutVideo'
import ResearchPage from './ResearchPage'
import TechnologyPage from './TechnologyPage'
import ContactPage from './ContactPage'


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" Component={HomePage}>
            <IndexRoute Component={AboutPage}></IndexRoute>
            {/* <Route path="/" Component={AboutPage}></Route> */}
            <Route path="/" Component={ResearchPage}></Route>
            <Route path="/" Component={TechnologyPage}></Route>
            <Route path="/" Component={ContactPage}></Route>
        </Route>
    </Router>


);