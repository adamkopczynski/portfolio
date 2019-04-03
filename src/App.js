import React, { Component } from 'react';

import Header from 'components/Header';
import TopSection from 'components/TopSection';
import Portfolio from 'components/Portfolio';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <TopSection />
        <Portfolio/>
      </div>
    );
  }
}

export default App;
