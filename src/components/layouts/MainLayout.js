import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import Services from '../pages/Services';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

import { Route } from 'react-router-dom'

class MainLayout extends Component {
  render() {
    return (
        <div className="primary-layout">

            <Header/>

            <main>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/services" exact component={Services} />
                <Route path="/contact" exact component={Contacts} />
                <Route path='/product/:id' component={Product}/>
                {/*<Route path='*' component={NotFound} />*/}
            </main>

            <Footer/>

        </div>
    );
  }
}

export default MainLayout;
