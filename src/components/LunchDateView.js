import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text} from 'native-base';
import { StyleSheet } from 'react-native';
import moment from 'moment/min/moment-with-locales'

export default class LunchDateView extends Component {
    componentWillMount() {
        {moment.locale("nb")}
    }
    render() {
        const {selectedDate} = this.props;
        return (
            <Container>
                <Content>
                    <Text/>
                    <Text style={styles.date_header}>
                        {selectedDate.getDate()}
                    </Text>
                    <Text style={styles.date_header}>
                        {moment().format("MMMM")}
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
                                Thai Suppe
                            </Text>
                            <Text>
                                Brød m/ pålegg
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
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