import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { Container, Title, Content, Header, Button } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import {Actions} from 'react-native-router-flux'

export default class CalendarView extends Component {
    handleSignup(e) {
        e.preventDefault();
        console.debug('Signed up!');
        this.props.signUpForLunch(this.props.selectedDate).then(result => {
            console.debug('result: ', result);
        }).catch(() => {
            console.debug('Error while trying to sign up');
        });
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <CalendarPicker 
                        selectedDate={this.props.selectedDate}
                        screenWidth={Dimensions.get('window').width}
                        onDateChange={date => this.props.setSelectedDate(date)}
                        selectedDayColor={'#5ce6F0'} />
                    <Button onPress={Actions.Home}>Gå til dato</Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    
});