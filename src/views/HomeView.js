import React, {Component} from 'react';
import {
    Container,
    Header,
    Content
} from 'native-base';
import LunchDateView from '../components/LunchDateView';

export default class Home extends Component {
    componentDidMount(){
        this.props.setSelectedDate(new Date());
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <LunchDateView selectedDate={this.props.selectedDate} signUpForLunch={this.props.signUpForLunch} />
                </Content>
            </Container>
        )
    }
}