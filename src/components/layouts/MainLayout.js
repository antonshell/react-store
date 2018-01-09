import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Product from '../Product';

import { Route } from 'react-router-dom'

class MainLayout extends Component {
  render() {
    return (
        <div className="primary-layout">

            <Header/>

            <main>
                <Route path="/" exact component={Home} />
                <Route path="/users" component={Product} />
            </main>


            <Footer/>

        </div>
    );
  }
}

export default MainLayout;
