import React, { Component } from 'react';
//import logo from '../logo.svg';
//import './App/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          {/*<Home/>*/}
          <Product/>
          <Footer/>




        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React !!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default App;