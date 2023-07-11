import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/Images/background.png')}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.ImageBackgroundImage}
			>
				{screen}
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	ImageBackgroundImage: {
		opacity: 0.15,
	},
});
