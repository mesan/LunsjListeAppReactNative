/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Title} from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LunsjListeApp extends Component {
  render() {
    return (
      <View>
       <Title style={{marginLeft: 80, marginTop: 100}}>
        Hello WOrkd!
       </Title>
      </View>
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
