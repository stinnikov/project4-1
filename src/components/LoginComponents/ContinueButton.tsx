import React from "react";
import { View, ViewStyle, ColorValue, TouchableOpacity, StyleSheet } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat600SemiBoldText } from "../Text/TextComponents";
import { Router, useRouter } from 'expo-router';

interface ContinueButton {
	style?: ViewStyle | ViewStyle[];
	textColor?: ColorValue;
	text: string;
}

export const ContinueButton: React.FC<ContinueButton> = React.memo((props) => {
	const router = useRouter();
	function navigateToLoginScreen() {
		router.push({
			pathname: '/(auth)/login',
		})
	}

	return (
		<TouchableOpacity onPress={navigateToLoginScreen} style={[styles.container, props.style]}>
			<Montserrat600SemiBoldText text={props.text} style={{ fontSize: 20, color: props.textColor }} />
		</TouchableOpacity>
	)
})

const styles = StyleSheet.create(
	{
		container: {
			justifyContent: "center",
			backgroundColor: colorsStyles.mainGreyColor.color,
			alignItems: 'center',
			borderRadius: 12,
			paddingVertical: 16,
		}
	}
)
export default ContinueButton