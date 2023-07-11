import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/Images/background.png')}
				resizeMode="cover"
				style={styles.rootScreen}
			>
				<StartGameScreen />
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
