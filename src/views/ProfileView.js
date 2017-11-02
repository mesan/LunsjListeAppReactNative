import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text} from 'native-base';
import {Actions} from 'react-native-router-flux'

export default class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        // Only change tab if a day is changed, not if a month is changed
        if (date.getMonth() === this.props.selectedDate.getMonth()) {
            Actions.Home();
        }
        this.props.setSelectedDate(date);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text/>
                    <Text style = {styles.center}>
                        Heyo, you are logged in as
                    </Text>
                    <Text style={[styles.username, styles.center]}>{this.props.username}</Text>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    username: {
        fontWeight: 'bold',
        color: 'green',
    },
    center: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
});