import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //Example if your site is server at www.mysite.com/my-app and the Route will contnue working
      //<BrowserRouter basename="my-app">
      <BrowserRouter basename="/view/http-requests">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
