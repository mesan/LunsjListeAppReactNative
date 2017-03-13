import React, { Component } from 'react';
import {View, Button, Card, CardItem, Text} from 'native-base';
import {StyleSheet, Image, TextInput} from 'react-native';

export default class ProfileView extends Component {
	render() {
		return (
			<View>
				<Image style={styles.image} source={{uri: 'https://s3-eu-west-1.amazonaws.com/faghelg/'
															+ this.props.user.username + '.png'}}/>
				<Text style={styles.profile_header}>
					{this.props.user.fullName}
				</Text>
				<Card>
					<CardItem>
						<Text style={styles.text}>
							Allergier:
						</Text>
						<Text>
							- Paprika
						</Text>
						<Text>
							- Laktose
						</Text>
						<Text>
							- Kokt/stekt fisk (blæ)
						</Text>
					</CardItem>
				</Card>
				<Button block style={styles.button}>Lagre</Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		height: 50,
		backgroundColor: '#3a5072'
	},
	text: {
		fontWeight: 'bold'
	},
	profile_header: {
		justifyContent: 'center',
		alignSelf: 'center',
		fontSize: 30,
		lineHeight: 40
	},
	image: {
		height: 150,
		borderRadius: 75,
		width: 150,
		marginTop: 50,
		alignSelf: 'center'
	}
});