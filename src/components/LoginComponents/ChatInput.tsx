import { colorsStyles } from '@/src/styles/styles';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';

interface ChatInput {
	style?: ViewStyle | ViewStyle[];
}

export const ChatInput: React.FC<ChatInput> = React.memo((props) => {
	const [inputValue, setInputValue] = useState('');

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
		setInputValue(text);
	};

	const getPlaceholder = () => {
		const placeholderFormat = '+7 (999) 999 99-99';
		const enteredLength = inputValue.replace(/\D/g, '').length;
		const remainingPlaceholder = placeholderFormat.slice(enteredLength);
		return remainingPlaceholder;
	};

	return (
		<View style={[styles.container, props.style]}>
			<TextInput
				style={styles.input}
				value={formatPhoneNumber(inputValue)}
				onChangeText={handleChange}
				placeholder={getPlaceholder()}
				placeholderTextColor="#888"
				keyboardType="phone-pad"
				maxLength={18} // Ограничиваем длину ввода
				selectionColor={colorsStyles.mainDarkColor.color} //Выделение
				cursorColor={colorsStyles.mainBrightColor.color} //Прямая линия ввода
			/>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: colorsStyles.mainGreyColor.color,
		borderRadius: 12,
		paddingVertical: 12,
		paddingLeft: 16,
	},
	input: {
		fontFamily: "Montserrat_500Medium",
		fontSize: 22,
	},
});

export default ChatInput;
