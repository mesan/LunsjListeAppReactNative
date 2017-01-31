import React, {Component} from 'react';
import {
    Container,
    Header,
    Content
} from 'native-base';
import LunchDateView from '../components/LunchDateView';

export default class Home extends Component {
    render() {
        console.log("home");
        return (
            <Container>
                <Header />
                <Content>
                    <LunchDateView />
                </Content>
            </Container>
        )
    }
}