import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import { Container, Title, Content, Header, Button } from 'native-base';

export default class OldProfileView extends Component {

	handleSignup(e) {
		e.preventDefault();
		console.debug('Signed up!');
		this.props.signUpForLunch(this.props.selectedDate).then(result => {
			console.debug('result: ', result);
		}).catch(() => {
			console.debug('Error while trying to sign up');
		});
	}

	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}} />
					<Text>
					</Text>


					<Button onPress={e => this.handleSignup(e)}>Meld med på</Button>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({

});