import React, { Component } from 'react';
import { Container, Title } from 'native-base';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import CalendarView from './containers/Calendar';
import Home from './views/Home';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const store = createStore(rootReducer);

export default class LunsjListeApp extends Component {
  render() {
    console.log('luncjlisteappppp');
    return (
      <Provider store={store}>
        <Router>
            <Scene key="Home" component={Home} title="Home" />
            <Scene key="Calendar" component={CalendarView} title="Calendar" />
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