import useLoginStore from '@/src/store/loginStore';
import { colorsStyles } from '@/src/styles/styles';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import LoginErrorText from './LoginErrorText';

interface ChatInput {
	style?: ViewStyle | ViewStyle[];
}

export const ChatInput: React.FC<ChatInput> = React.memo((props) => {
	const { setInputPhoneNumber, error, inputPhoneNumber } = useLoginStore();

	const formatPhoneNumber = (number: string) => {
		// Убираем все, кроме цифр
		const cleaned = ('' + number).replace(/\D/g, '');
		const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

		if (!match) {
			return '';
		}

		const [, countryCode, areaCode, firstPart, secondPart, thirdPart] = match;

		let formattedNumber = '+7 ';
		if (areaCode) {
			formattedNumber += `(${areaCode}`;
		}
		if (firstPart) {
			formattedNumber += `) ${firstPart}`;
		}
		if (secondPart) {
			formattedNumber += ` ${secondPart}`;
		}
		if (thirdPart) {
			formattedNumber += `-${thirdPart}`;
		}

		return formattedNumber.trim();
	};

	const handleChange = (text: string) => {
		setInputPhoneNumber(text);
	};



	return (
		<View style={[styles.container, props.style]}>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.input}
					value={formatPhoneNumber(inputPhoneNumber ?? '+7')}
					onChangeText={handleChange}
					keyboardType="phone-pad"
					maxLength={18} // Ограничиваем длину ввода
					selectionColor={colorsStyles.mainDarkColor.color} //Выделение
					cursorColor={colorsStyles.mainBrightColor.color} //Прямая линия ввода
				/>
			</View>
			{error && <LoginErrorText />}

		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	textInputContainer: {
		borderRadius: 12,
		paddingVertical: 12,
		paddingLeft: 16,
		backgroundColor: colorsStyles.mainGreyColor.color,
	},
	input: {
		fontFamily: "Montserrat_500Medium",
		fontSize: 22,
	},
});

export default ChatInput;
