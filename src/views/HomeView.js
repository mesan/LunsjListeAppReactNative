import React, {Component} from 'react';
import {
    Container,
    Header,
    Content
} from 'native-base';
import LunchDateView from '../components/LunchDateView';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <LunchDateView
                        selectedDate={this.props.selectedDate}
                        signUpForLunch={this.props.signUpForLunch}
                        setSignedUp={this.props.setSignedUp}
                        fetchUserSignedUpForLunch={this.props.fetchUserSignedUpForLunch}
                        isSignedUpForLunch={this.props.isSignedUpForLunch}/>
                </Content>
            </Container>
        )
    }
}