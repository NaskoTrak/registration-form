import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const FormInput = ({
	inputLabel,
	inputValue,
	setInputValue,
	typeOfKeyboard,
}) => {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.textInputLabelText}>{inputLabel}</Text>
			<TextInput
				style={styles.input}
				onChangeText={(value) => setInputValue(value)}
				value={inputValue}
				keyboardType={typeOfKeyboard}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		width: Dimensions.get('window').width * 0.8,
		marginTop: 10,
		marginBottom: 10,
	},
	textInputLabelText: {
		fontSize: 16,
		marginBottom: 2,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		paddingLeft: 10,
	},
});

export default FormInput;
