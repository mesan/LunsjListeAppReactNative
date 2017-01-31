import React, { Component } from 'react';
import {View, Button, Card, CardItem, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default class LunchDateView extends Component {
    render() {
        console.log("lunchdateview");
        return (
            <View>
                <Text/>
                <Text style={styles.date_header}>
                    27.
                </Text>
                <Text style={styles.date_header}>
                    Januar
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
                <Button block style={styles.button}>Meld meg på!</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        marginTop: 300,
        backgroundColor: '#56e6f0'
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