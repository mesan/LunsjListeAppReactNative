import React, { Component } from 'react';
import {View, Button, Card, CardItem, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default class LunchProfileView extends Component {
	render() {
		console.log("lunchprofileview");
		return (
			<View>
				<Text/>
				<Text style={styles.profile_header}>
					kajas
				</Text>
				<Text style={styles.profile_header}>
					Kaja Longem Skaar
				</Text>
				<Card>
					<CardItem>
						<Text style={styles.text}>
							Allergier:
						</Text>
						<Text>
							Paprika
						</Text>
						<Text>
							Laktose
						</Text>
						<Text>
							Kokt/stekt fisk (blæ)
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
		marginTop: 300,
		backgroundColor: '#56e6f0'
	},
	text: {
		fontWeight: 'bold'
	},
	profile_header: {
		justifyContent: 'center',
		alignSelf: 'center',
		fontSize: 30,
		lineHeight: 30
	}
});