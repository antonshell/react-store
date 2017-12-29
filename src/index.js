import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import './index.css';
//import './../node_modules/bootstrap/dist/css/bootstrap.css';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
