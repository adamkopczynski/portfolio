import React, { Component } from 'react';

import Header from 'components/Header';
import TopSection from 'components/TopSection';
import Portfolio from 'components/Portfolio';
import About from 'components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopSection />
        <About />
        <Portfolio/>
      </div>
    );
  }
}

export default App;
