import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Container, Content, Header } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import {Actions} from 'react-native-router-flux'

export default class CalendarView extends Component {
    constructor(props){
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.props.setSelectedDate(date);
        Actions.Home();
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <CalendarPicker 
                        selectedDate={this.props.selectedDate}
                        screenWidth={Dimensions.get('window').width}
                        onDateChange={date => this.handleDateChange(date)}
                        selectedDayColor={'#5ce6F0'} />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

});