import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import {Scene, Router, Tab} from 'react-native-router-flux';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import TabContainer from './containers/TabContainer';
import LoginContainer from './containers/Login';
import HomeContainer from './containers/Home';
import rootReducer from './reducers';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, reduxPackMiddleware));

export default class LunsjListeApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="Home" component={HomeContainer} />
                    <Scene key="TabView" component={TabContainer} renderBackButton={() => (null)} />
                    {/*<Scene key="Login" component={LoginContainer} initial={true} />*/}
                </Router>
            </Provider>
        );
    }
}