import { Image, Text, View } from 'react-native';
import Title from '../components/Title';

function GameOverScreen() {
	return (
		<View>
			<Title>GAME OVER!</Title>
      <Image source={require('../assets/images/success.png')} />
		</View>
	);
}

export default GameOverScreen;
