import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationForm from './screens/RegistrationForm';
import WelcomePage from './screens/WelcomePage';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="RegistrationForm"
					component={RegistrationForm}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="WelcomePage" component={WelcomePage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
