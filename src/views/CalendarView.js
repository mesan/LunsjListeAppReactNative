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
        let newIndex = this.props.navigationStateIndex == 1? 0 : 1;
        this.props.setNavigationStateIndex(newIndex);
        // Actions.Home();
    }

    render() {
        return (
            <Container>
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