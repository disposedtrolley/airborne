import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
