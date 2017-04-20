import React, {Component} from 'react';
import {Actions, Scene, Router, Tab} from 'react-native-router-flux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import TabContainer from './containers/TabContainer'

import rootReducer from './reducers';

const store = createStore(rootReducer);

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