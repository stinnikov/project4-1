import React, { useState } from "react";
import { View, ViewStyle, ColorValue, TouchableOpacity, StyleSheet } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat600SemiBoldText } from "../Text/TextComponents";
import { Router, useRouter } from 'expo-router';

interface ContinueButton {
	style?: ViewStyle | ViewStyle[];
	text: string;
}

export const ContinueButton: React.FC<ContinueButton> = React.memo((props) => {
	const router = useRouter();
	const [isPressed, setIsPressed] = useState(false);

	function navigateToLoginScreen() {
		router.push({
			pathname: '/(auth)/login',
		});
	}

	return (
		<TouchableOpacity
			onPress={navigateToLoginScreen}
			onPressIn={() => setIsPressed(true)} // Устанавливаем состояние нажатия
			onPressOut={() => setIsPressed(false)} // Сбрасываем состояние нажатия
			style={[styles.container, props.style, isPressed && styles.pressed]} // Добавляем стиль при нажатии
		>
			<Montserrat600SemiBoldText
				text={props.text}
				style={{
					fontSize: 20,
					color: isPressed ? colorsStyles.mainWhiteColor.color : colorsStyles.mainDarkGreyColor.color
				}} // Меняем цвет текста при нажатии
			/>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		backgroundColor: colorsStyles.mainGreyColor.color,
		alignItems: 'center',
		borderRadius: 12,
		paddingVertical: 16,
	},
	pressed: {
		backgroundColor: colorsStyles.mainBrightColor.color, // Замените на нужный цвет для состояния нажатия
	},


});

export default ContinueButton;