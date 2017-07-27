import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap-css-modules/css/reboot.css';
import './stylesheets/main.css';

import asyncComponent from './components/asyncComponent.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';

const Components = asyncComponent(async function () {
  const module = await import(/* webpackChunkName: 'components' */ './pages/Components.jsx');
  return module.default;
});

const Login = asyncComponent(async function () {
  const module = await import(/* webpackChunkName: 'login' */ './pages/Login.jsx');
  return module.default;
});

const data = {
  carouselImages: [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
  ]
};

// Set basename to GitHub pages path
render(
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/bootstrap-css-modules-demo' : '/'}>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/components' render={() => <Components data={data} />} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
