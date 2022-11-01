import React from 'react';
import { StyleSheet, Text, SafeAreaView, Dimensions } from 'react-native';

const WelcomePage = (props) => {
	const { firstName } = props.route.params;

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.welcomeTextHeading}>Hello {firstName},</Text>
			<Text style={styles.welcomeTextMessage}>
				Welcome to our app. Have a nice day!
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		padding: 20,
	},
	welcomeTextHeading: {
		fontSize: 24,
		marginTop: Dimensions.get('window').height * 0.2,
	},
	welcomeTextMessage: {
		fontSize: 18,
	},
});

export default WelcomePage;
