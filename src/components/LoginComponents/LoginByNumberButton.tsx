import React from "react";
import { View, ViewStyle, ColorValue, TouchableOpacity, StyleSheet } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat600SemiBoldText } from "../Text/TextComponents";


interface LoginByNumberButton {
	style?: ViewStyle | ViewStyle[];
}

export const LoginByNumberButton: React.FC<LoginByNumberButton> = React.memo((props) => {
	function handlePressOnButton() {

	}

	return (
		<TouchableOpacity onPress={handlePressOnButton} style={[styles.container, props.style]}>
			<Montserrat600SemiBoldText text="Войти по номеру телефона" style={{ fontSize: 20 }} />
		</TouchableOpacity>
	)
})

const styles = StyleSheet.create(
	{
		container: {
			justifyContent: "center",
			backgroundColor: colorsStyles.mainWhiteColor.color,
			alignItems: 'center',
			borderRadius: 12,
			paddingVertical: 16,
		}
	}
)
export default LoginByNumberButton