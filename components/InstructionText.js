import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { Text } from 'react-native';

function InstructionText({ children, style }) {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: 'open-sans',
		color: Colors.accent500,
		fontSize: 24,
	},
});

export default InstructionText;
