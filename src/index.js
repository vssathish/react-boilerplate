import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
//import { Provider } from 'react-redux';
import App from './containers/App';
//import configureStore from './store/configureStore';

import { Router, Route, browserHistory, hashHistory, IndexRedirect } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import * as Containers from './containers';

import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/bootstrap.css';
import './styles/bootstrap-theme.css';
import './styles/font-awesome.css';

//const store = configureStore();

render(
    <Router history = {browserHistory}>
      <Route path="/" component={Containers.App}>
        <IndexRedirect to="overview" />
        <Route path="overview" component={Containers.Overview} />
        <Route path="*" component={Containers.NotFoundPage}/>
      </Route>
    </Router>, document.getElementById('app')
);
