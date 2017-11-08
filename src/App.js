import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import Contacts from './Contacts';
import Portfolio from './Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/kontakty" component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <p>&nbsp;</p>
        <Footer />
      </div>
    );
  }
}

export default App;
