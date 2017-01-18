import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { Container, Title, Content, Header } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarView extends Component {
    constructor() {
        super();
        this.state = {
            lunchDate: new Date()
        }
    }

    dateChange(date) {
        alert(date);
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <CalendarPicker selectedDate={this.state.lunchDate}
                        screenWidth={Dimensions.get('window').width}
                        onDateChange={this.dateChange}
                        selectedBackgroundColor={'#5ce6F0'} />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    selectedDateColor: {
        backgroundColor: "#5ce600"
    }
});