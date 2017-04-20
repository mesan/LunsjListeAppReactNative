import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { applyMiddleware, createStore } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

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
            <Scene key="Login" component={Login} title="Login" initial={true} />
            <Scene key="Home" component={Home} title="Home" />
            <Scene key="Calendar" component={Calendar} title="Calendar" renderBackButton={() => (null)} />
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});