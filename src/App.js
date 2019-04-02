import React, { Component } from 'react';

import Header from 'components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

export default App;
