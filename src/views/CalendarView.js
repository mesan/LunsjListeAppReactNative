import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {Container, Content} from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import {Actions} from 'react-native-router-flux'

export default class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        // Only change tab if a day is changed, not if a month is changed
        if (date.getMonth() === this.props.selectedDate.getMonth()) {
            this.props.setNavigationStateIndex(1);
        }
        this.props.setSelectedDate(date);
    }

    render() {
        return (
            <Container>
                <Content>
                    <CalendarPicker
                        selectedDate={this.props.selectedDate}
                        screenWidth={Dimensions.get('window').width}
                        onDateChange={date => this.handleDateChange(date)}
                        selectedDayColor={'#5ce6F0'}/>
                </Content>
            </Container>
        )
    }
}