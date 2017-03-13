import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';
import {
    Container,
    Header,
    Content,
} from 'native-base';

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    onClick() {
        this.props.attemptLogin(this.state.email, this.state.password);
    }
    render() {
        return (
            <Container>
                <Header />
                <Content style={styles.container}>
                    <TextInput style={styles.email} placeholder="email" keyboardType={'email-address'} 
                        value={this.state.email} onChangeText={text => this.setState({email: text})} />
                    <TextInput style={styles.email} placeholder="password" secureTextEntry={true} 
                        value={this.state.password} onChangeText={text => this.setState({password: text})} />
                    <Button title="Logg inn" onPress={() => this.onClick()} />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150
    },
    email: {
        borderColor: 'grey',
        height: 40,
        marginLeft: 10
    },
    loginButton: {
        backgroundColor: 'yellow'
    }
});