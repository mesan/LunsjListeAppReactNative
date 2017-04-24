import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { applyMiddleware, createStore } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import React, {Component} from 'react';
import {Actions, Scene, Router, Tab} from 'react-native-router-flux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import TabContainer from './containers/TabContainer'

import rootReducer from './reducers';
import Calendar from './containers/Calendar';
import Home from './containers/Home';
import Login from './containers/Login';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, reduxPackMiddleware));

export default class LunsjListeApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="TabView" component={TabContainer}/>
                </Router>
            </Provider>
        );
    }
}