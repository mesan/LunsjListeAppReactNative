import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content} from 'native-base'
import {TabViewAnimated, TabBar} from 'react-native-tab-view';

import Calendar from './../containers/Calendar';
import Home from './../containers/Home';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class TabView extends Component {
    state = {
        index: 0,
        routes: [
            {key: '1', title: 'Calendar'},
            {key: '2', title: 'Profile'}
        ],
    };

    _handleChangeTab = (index) => {
        this.setState({index});
    };

    _renderHeader = (props) => {
        return <TabBar {...props} />;
    };

    _renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <Calendar/>
            case '2':
                return <Home/>;
            default:
                return null;
        }
    };

    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <TabViewAnimated
                        style={styles.container}
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onRequestChangeTab={this._handleChangeTab}
                    />
                </Content>
            </Container>
        );
    }
}