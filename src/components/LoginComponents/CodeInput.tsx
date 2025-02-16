import { colorsStyles } from '@/src/styles/styles';
import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ViewStyle, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { Montserrat500MediumText } from '../Text/TextComponents';

interface CodeInput {
	style?: ViewStyle | ViewStyle[];
}

export const CodeInput: React.FC<CodeInput> = React.memo((props) => {
	const inputRefs = useRef<Array<TextInput | null>>([]);
	const [values, setValues] = useState(Array(6).fill(''));

	const handleChange = (text: string, index: number) => {
		if (/^\d$/.test(text) || text === '') {
			const newValues = [...values];
			newValues[index] = text;
			setValues(newValues);

			if (text.length === 1 && index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
		if (e.nativeEvent.key === 'Backspace' && index > 0 && values[index] === '') {
			const newValues = [...values];
			newValues[index - 1] = '';
			setValues(newValues);
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<View style={[styles.container, props.style]}>
			<View style={styles.inputContainer}>
				{Array(6).fill(null).map((_, index) => (
					<TextInput
						key={index}
						style={styles.input}
						maxLength={1}
						keyboardType="numeric"
						value={values[index]}
						onChangeText={(text) => handleChange(text, index)}
						onKeyPress={(e) => handleKeyPress(e, index)}
						ref={(ref) => inputRefs.current[index] = ref}
						cursorColor={colorsStyles.mainBrightColor.color}
					/>
				))}
			</View>
		</View>
	);
});


const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	inputContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	input: {
		//backgroundColor: 'red',
		width: 32,
		height: 40,
		textAlign: 'center',
		paddingBottom: 8,
		borderBottomWidth: 2,
		borderBottomColor: colorsStyles.mainDarkGreyColor.color,
		marginHorizontal: 4,
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 28,
	},
});

export default CodeInput;