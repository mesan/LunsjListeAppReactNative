import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Content} from 'native-base'
import {TabViewAnimated, TabBar, TabViewPagerPan} from 'react-native-tab-view';

import Calendar from './../containers/Calendar';
import Profile from './../containers/Profile';
import Home from './../containers/Home';

export default class TabView extends Component {
    navigationState = newIndex => ({
        index: newIndex ? newIndex : 0,
        routes: [
            {key: '1', title: 'Calendar'},
            {key: '2', title: 'Profile'}
        ]
    });


    _handleChangeTab = (index) => {
        console.log("_handleChangeTab(" + index + ")");
        this.props.setNavigationStateIndex(index);
    };

    _renderHeader = (props) => {
        return <TabBar {...props} />;
    };

    _renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <Calendar/>;
            default:
                return <Profile/>;
        }
    };

    _renderPager = props => {
        return <TabViewPagerPan {...props} />;
    };

    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <TabViewAnimated
                        style={styles.container}
                        navigationState={this.navigationState(this.props.navigationStateIndex)}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onRequestChangeTab={this._handleChangeTab}
                        renderPager={this._renderPager}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});