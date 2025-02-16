import { colorsStyles } from '@/src/styles/styles';
import React from 'react';
import { StyleSheet, Linking, View, Text, ViewStyle } from 'react-native';

interface TextWithLink {
	style?: ViewStyle | ViewStyle[];
}

export const TextWithLink: React.FC<TextWithLink> = React.memo((props) => {
	const handleLinkPress = () => {
		Linking.openURL('https://example.com');
	};


	return (
		<View style={[styles.container, props.style]}>
			<Text style={styles.text}>
				Нажмите здесь для посещения{' '}
				<Text style={styles.link} onPress={handleLinkPress}>
					example.com
				</Text>
			</Text>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {

	},
	text: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 16,
	},
	link: {
		color: 'blue',
		textDecorationLine: 'underline',
	},
});

export default TextWithLink;