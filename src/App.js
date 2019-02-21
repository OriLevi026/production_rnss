import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
//files import
import './App.css'
import NavigationBar from './NavigationBar'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ResearchPage from './ResearchPage'
import ContactPage from './ContactPage'
import TrainEyeMusic from './TrainEyeMusic'
import DiagonalLines from './DiagonalLines'
import DiagonalWhite from './DiagonalWhite'
import DiagonalRed from './DiagonalRed'
import TopoSpeach from './TopoSpeach'
import TopoSpeechTutorial from './TopoSpeechTutorial'
import ErorrPage from './ErorrPage'
import Products from './Products';
import EyeMusicApp from './EyeMusicApp';
import EyeMusicWearable from './EyeMusicWearable';


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <NavigationBar/>
              <Switch>
                <Route path="/" component={HomePage} exact></Route>
                <Route path="/About" component={AboutPage}></Route>
                <Route path="/Products" component={Products}exact></Route>
                <Route path="/Products/EyeMusicApp" component={EyeMusicApp}></Route>
                <Route path="/Products/EyeMusicWearable" component={EyeMusicWearable}></Route>
                <Route path="/Research" component={ResearchPage}></Route>
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
