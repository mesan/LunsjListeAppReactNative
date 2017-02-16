import React, { Component } from 'react';
import {View, Button, Card, CardItem, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default class LunchDateView extends Component {
    componentDidMount(){
        console.log('componentdidmount');
        this.props.fetchUserSignedUpForLunch(new Date(), 'idarv').then(result => {
            this.props.setSignedUp(result);
        }).catch(e => {
            console.debug('Error while checking if signed up: ', e)
        });
    }

    handleSignup(e) {
        e.preventDefault();
        console.debug('Signed up!');
        this.props.signUpForLunch(this.props.selectedDate, 'idarv', !this.props.isSignedUpForLunch).then(result => {
            // this.props.setSignedUp(result ? true : false);
            // console.debug('result: ', result);
            this.props.fetchUserSignedUpForLunch(new Date(), 'idarv').then(result => {
                this.props.setSignedUp(result);
            }).catch(e => {
                console.debug('Error while checking if signed up: ', e)
            });
        }).catch((e) => {
            console.debug('Error while trying to sign up : ', e);
        });
    }

    render() {
        console.log("lunchdateview");
        const {
            selectedDate
        } = this.props;
        return (
            <View>
                <Text/>
                <Text style={styles.date_header}>
                    {selectedDate.getDate()}
                </Text>
                <Text style={styles.date_header}>
                    {selectedDate.toLocaleString("nb", {month: "long"})}
                </Text>
                <Card>
                    <CardItem>
                        <Text style={styles.text}>
                            Til lunsj i dag:
                        </Text>
                        <Text>
                            Kyllingsalat
                        </Text>
                        <Text>
                            Thai Suppe (sukkerfri, vegansk)
                        </Text>
                        <Text>
                            Brød m/ pålegg
                        </Text>
                    </CardItem>
                </Card>
                <Button block style={this.props.isSignedUpForLunch ? styles.buttonRed : styles.buttonGreen } onPress={e => this.handleSignup(e)}>Meld meg {this.props.isSignedUpForLunch ? 'av' : 'på'}!</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonGreen: {
        height: 50,
        marginTop: 300,
        backgroundColor: '#73D6C5'
    },
    buttonRed: {
        height: 50,
        marginTop: 300,
        backgroundColor: '#D67373'
    },
    text: {
        fontWeight: 'bold'
    },
    date_header: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        lineHeight: 30
    }
});