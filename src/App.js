import React, { Component } from 'react';

import Header from 'components/Header';
import TopSection from 'components/TopSection';
import Portfolio from 'components/Portfolio';
import About from 'components/About';
import Footer from 'components/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;
