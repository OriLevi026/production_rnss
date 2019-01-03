import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
//files import
import './App.css'
import HomePage from './HomePage'
import NavigationBar from './NavigationBar'
import AboutPage from './AboutPage'
import Subscribe from './Subscribe'
import AboutVideo from './AboutVideo'
import ResearchPage from './ResearchPage'
import TechnologyPage from './TechnologyPage'
import ContactPage from './ContactPage'
import ErorrPage from './ErorrPage'
import TrainEyeMusic from './TrainEyeMusic'
import DiagonalLines from './DiagonalLines'
import DiagonalWhite from './DiagonalWhite'
import DiagonalRed from './DiagonalRed'
import TopoSpeach from './TopoSpeach'
import TopoSpeechTutorial from './TopoSpeechTutorial'


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <NavigationBar class="NavBar"/>
              <Switch>
               <Route path="/" component={HomePage} exact></Route>
               <Route path="/About" component={AboutPage}></Route>
               <Route path="/Research" component={ResearchPage}></Route>
               <Route path="/Technology" component={TechnologyPage}></Route>
               <Route path="/Contact" component={ContactPage}></Route>
               <Route path="/TrainEyeMusic" component={TrainEyeMusic} exact></Route>
               <Route path="/TrainEyeMusic/DiagonalLines"component={DiagonalLines} exact></Route>
               <Route path="/TrainEyeMusic/Diagonal-Lines/White" component={DiagonalWhite}exact exact></Route>
               <Route path="/TrainEyeMusic/Diagonal-Lines/Red" component={DiagonalRed}exact exact></Route>
               <Route path="/TrainEyeMusic/TopoSpeach" exact exact exact component={TopoSpeach}></Route>
               <Route path="/TrainEyeMusic/TopoSpeechTutorial"  component={TopoSpeechTutorial}></Route>

               <Route component={ErorrPage} exact/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;