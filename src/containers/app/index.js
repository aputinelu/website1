import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePageOne from '../Pages/HomePageOne'
import HomePageTwo from '../Pages/HomePageTwo'
import HomePageThree from '../Pages/HomePageThree'
import AboutPage from '../Pages/AboutPage'
import PracticePage from '../Pages/PracticePage'
import PracticeSinglePage from '../Pages/PracticeSinglePage'
import PortfolioPage from '../Pages/PortfolioPage'
import SinglePortfolioPage from '../Pages/SinglePortfolioPage'
import TeamPage from '../Pages/TeamPage'
import SingleTeamPage from '../Pages/SingleTeamPage'
import SingleTeamPage1 from '../Pages/SingleTeamPage1'
import ContactPage from '../Pages/ContactPage'

import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Switch>
                        <Route exact path="/" component={HomePageOne} />
                        <Route exact path="/home-two" component={HomePageTwo} />
                        <Route exact path="/home-three" component={HomePageThree} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/practice" component={PracticePage} />
                        <Route exact path="/practice-details" component={PracticeSinglePage} />
                        <Route exact path="/case-stadies" component={PortfolioPage} />
                        <Route exact path="/case-stadies-details" component={SinglePortfolioPage} />
                        <Route exact path="/attorneys" component={TeamPage} />
                        <Route exact path="/attorneys-single" component={SingleTeamPage} />
                        <Route exact path="/attorneys-single1" component={SingleTeamPage1} />
                        <Route exact path="/contact" component={ContactPage} />
                        
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
