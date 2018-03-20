import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import {Actions} from 'react-native-router-flux'
import { getAllergies } from "../services/ProfileApiService";

export default class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        const {
            setAllergies
        } = this.props;

        getAllergies(this.props.username)
            .then(result => setAllergies(result))
            .catch(e => console.error('Error while checking allergies: ', e));
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
                    <Image style={styles.image} source={{uri: 'https://s3-eu-west-1.amazonaws.com/faghelg/'
                        + this.props.username + '.png'}}/>
                    <Text style = {styles.center}>
                        Heyo, you are logged in as
                    </Text>
                    <Text style={[styles.username, styles.center]}>{this.props.username}</Text>
                    <Text style = {styles.center}>
                        Your Allergies:
                    </Text>
                    <Text style={[styles.username, styles.center]}>{this.props.allergyList}</Text>
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
    },
    image: {
        height: 150,
        borderRadius: 75,
        width: 150,
        marginTop: 50,
        alignSelf: 'center'
    },
    button: {
        height: 50,
        backgroundColor: '#3a5072'
    },
});