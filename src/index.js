import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './services'
import Projects from './projects'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker';
import Contact from './contact';

class App extends Component {
  render(){
    return(
      <div>

        <Router>
          <div className="Router-Test">
          <Navigation/> 
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </Router>

      </div>
      
    );
  }

}


class Main extends Component{
  render(){
    return(
      <div>
        <Header title="Will Luong" button="Find Out More"/>
        <Projects /> 
        <Services />
        <Footer />


      </div>
    )
  }
}

      
     


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
