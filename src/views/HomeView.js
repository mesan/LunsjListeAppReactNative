import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
    Container,
    Header,
    Content,
    Footer,
    Button,
    Text
} from 'native-base';
import LunchDateView from '../components/LunchDateView';

const getButtonStyle = isSignedUpForLunch => {
    return isSignedUpForLunch ? styles.buttonRed : styles.buttonGreen
};

export default class Home extends Component {
    componentDidMount(){
        const {
            fetchUserSignedUpForLunch, selectedDate, setSignedUp, username
        } = this.props;

        fetchUserSignedUpForLunch(selectedDate, username)
            .then(result => setSignedUp(result))
            .catch(e => console.error('Error while checking if signed up: ', e));
    }

    handleSignup() {
        const {
            signUpForLunch, selectedDate, isSignedUpForLunch,
            fetchUserSignedUpForLunch, setSignedUp, username
        } = this.props;

        signUpForLunch(selectedDate, username, !isSignedUpForLunch)
            .then(() => fetchUserSignedUpForLunch(selectedDate, username))
            .then(result => setSignedUp(result))
            .catch(e => console.error('Error while trying to sign up : ', e));
    }

    render() {
        const {
            selectedDate, signUpForLunch, setSignedUp,
            fetchUserSignedUpForLunch, isSignedUpForLunch,
            username
        } = this.props;
        return (
            <Container>
                <Header />
                <Content>
                    <LunchDateView
                        username={username}
                        selectedDate={selectedDate}
                        signUpForLunch={signUpForLunch}
                        setSignedUp={setSignedUp}
                        fetchUserSignedUpForLunch={fetchUserSignedUpForLunch}
                        isSignedUpForLunch={isSignedUpForLunch}/>
                </Content>
                <Footer>
                    <Button block
                            style={[styles.button, getButtonStyle(isSignedUpForLunch)]}
                            onPress={e => this.handleSignup()}>
                        <Text>Meld meg {isSignedUpForLunch ? 'av' : 'på'}!</Text>
                    </Button>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 55,
        borderRadius: 0
    },
    buttonGreen: {
        backgroundColor: '#73D6C5'
    },
    buttonRed: {
        backgroundColor: '#D67373'
    }
});