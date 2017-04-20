import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    View
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Button,
    InputGroup,
    Input,
    Spinner
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
        this.setState({password: ''})
    }
    render() {
        return (
            <Container>
                <Header />
                {this.props.isLoading ?
                    <View style={styles.loadingContainer}>
                        <Spinner color="blue" />
                    </View>
                    :
                    <Content style={styles.container}>
                        <InputGroup borderType="underline">
                            <Input placeholder="email" keyboardType={'email-address'}
                                   value={this.state.email} onChangeText={text => this.setState({email: text})} />
                        </InputGroup>
                        <InputGroup borderType="underline">
                            <Input placeholder="password" secureTextEntry={true}
                                   value={this.state.password} onChangeText={text => this.setState({password: text})} />
                        </InputGroup>
                        <Button style={styles.loginButton} block onPress={() => this.onClick()}>Login</Button>
                    </Content>
                }
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        margin: 10
    },
    loadingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        marginTop: 25,
        borderRadius: 0
    }
});