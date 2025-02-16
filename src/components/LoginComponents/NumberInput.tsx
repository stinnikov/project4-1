import { colorsStyles } from '@/src/styles/styles';
import React from 'react';
import { StyleSheet, TextInput, View, Text, ViewStyle } from 'react-native';
import { Montserrat500MediumText } from '../Text/TextComponents';


interface NumberInput {
	style?: ViewStyle | ViewStyle[];
}

export const NumberInput: React.FC<NumberInput> = React.memo((props) => {
	const [number, onChangeNumber] = React.useState('');

	const handleChangeText = (input: string) => {
		onChangeNumber(input);
	};

	return (
		<View style={[styles.buttonContainer, props.style]}>
			<Text style={styles.placeHolder}>
				{number.length === 0 ? '+7(999)999-99-99' : ''}
			</Text>
			<Montserrat500MediumText text="+7" style={styles.numberInput} />
			<TextInput
				style={styles.numberInput}
				onChangeText={onChangeNumber}
				value={number}
				keyboardType="numeric"
				placeholder=""
				selectionColor={colorsStyles.mainDarkColor.color} //Выделение
				cursorColor={colorsStyles.mainBrightColor.color} //Прямая линия ввода

			/>
		</View>
	);
});

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		backgroundColor: colorsStyles.mainLightGreyColor.color,
		borderRadius: 12,
		paddingVertical: 12,
		paddingLeft: 16,
	},
	numberInput: {
		fontFamily: "Montserrat_500Medium",
		fontSize: 22,

	},
	placeHolder: {
		position: 'absolute',
		color: '#888', // Цвет текста плейсхолдера
		fontFamily: "Montserrat_500Medium",
		fontSize: 22,
		paddingVertical: 12,
		paddingLeft: 16,
	},
});

export default NumberInput;