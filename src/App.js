import React from 'react';
import Navigation from './components/Nav/Navigation'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component = {Home} /> 
          <Route exact path="/home" component = {Home} /> 
          <Route exact path="/home/:id" component = {Detail} /> 
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
