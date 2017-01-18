/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Title } from 'native-base';
import { Actions, Scene, Router } from 'react-native-router-flux';
import CalendarView from './src/views/CalendarView';
import Home from './src/views/Home';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LunsjListeApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="Calendar" component={CalendarView} title="Calendar" />      
        <Scene key="Home" component={Home} title="Home" />
      </Router>
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

AppRegistry.registerComponent('LunsjListeApp', () => LunsjListeApp);
