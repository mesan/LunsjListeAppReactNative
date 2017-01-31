import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { Container, Title, Content, Header } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarView extends Component {

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
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    
});