import { React, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Dimensions,
	TouchableOpacity,
	Alert,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import FormInput from './FormInput';

const RegistrationForm = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [termsAndConditions, setTermsAndConditions] = useState(false);

	const nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
	const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

	const onFormSubmit = () => {
		if (firstName.trim() === '') {
			Alert.alert("Please, add 'First name'.");
			return;
		}
		if (!firstName.match(nameRegex)) {
			Alert.alert("Please, add valid 'First name'.");
			return;
		}
		if (lastName.trim() === '') {
			Alert.alert("Please, add 'Last name'.");
			return;
		}
		if (!lastName.match(nameRegex)) {
			Alert.alert("Please, add valid 'Last name'.");
			return;
		}
		if (email.trim() === '') {
			Alert.alert("Please, add 'E-mail'.");
			return;
		}
		if (!email.match(emailRegex)) {
			Alert.alert("Please, add valid 'E-mail'.");
			return;
		}
		if (phoneNumber.trim() === '') {
			Alert.alert("Please, add 'Phone number'.");
			return;
		}
		if (!phoneNumber.match(phoneRegex)) {
			Alert.alert("Please, add valid 'Phone number'.");
			return;
		}
		if (termsAndConditions === false) {
			Alert.alert("Please, agree with our 'Terms & Conditions'.");
			return;
		}
		props.navigation.navigate('WelcomePage', {
			firstName,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.regFormHeadingText}>Registration form</Text>
			<Text style={styles.explanatoryText}>Please fill in all fields</Text>
			<FormInput
				inputLabel={'First name'}
				inputValue={firstName}
				setInputValue={setFirstName}
				typeOfKeyboard={'default'}
			/>
			<FormInput
				inputLabel={'Last name'}
				inputValue={lastName}
				setInputValue={setLastName}
				typeOfKeyboard={'default'}
			/>
			<FormInput
				inputLabel={'E-mail'}
				inputValue={email}
				setInputValue={setEmail}
				typeOfKeyboard={'email-address'}
			/>
			<FormInput
				inputLabel={'Phone number'}
				inputValue={phoneNumber}
				setInputValue={setPhoneNumber}
				typeOfKeyboard={'phone-pad'}
			/>
			<View style={styles.checkboxContainer}>
				<CheckBox
					value={termsAndConditions}
					onValueChange={() => setTermsAndConditions(!termsAndConditions)}
					style={styles.checkbox}
					color={termsAndConditions ? '#4630EB' : undefined}
				/>
				<Text style={styles.checkboxLabel}>
					Please, agree with our Terms & Conditions
				</Text>
			</View>
			<TouchableOpacity style={styles.button} onPress={onFormSubmit}>
				<Text style={styles.buttonText}>Submit form</Text>
			</TouchableOpacity>
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
	regFormHeadingText: {
		fontSize: 24,
		marginTop: Dimensions.get('window').height * 0.1,
	},
	explanatoryText: {
		marginTop: 10,
	},
	checkboxContainer: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: 'center',
	},
	checkboxLabel: {
		margin: 8,
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#4630EB',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
	},
});

export default RegistrationForm;
