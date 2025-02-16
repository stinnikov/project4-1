import React, { useState } from "react";
import { View, Text, ViewStyle, StyleSheet, TouchableOpacity, } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat600SemiBoldText } from "../Text/TextComponents";


interface AgreeMailingCheckBox {
	style?: ViewStyle | ViewStyle[];
}

interface CustomCheckBoxProps {
	onChange: () => void,
	value: boolean
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = (props) => {
	return (
		<TouchableOpacity onPress={props.onChange} style={styles.container}>
			<View style={[styles.checkBoxLine, props.value && styles.checkedLine]}></View>
			<View style={[styles.checkBox, props.value && styles.checked]} />
		</TouchableOpacity>
	);
};

export const AgreeMailingCheckBox: React.FC<AgreeMailingCheckBox> = React.memo((props) => {
	const [isSelected, setSelected] = useState(false);


	return (
		<View style={[styles.container, props.style]}>
			<CustomCheckBox
				value={isSelected}
				onChange={() => setSelected(!isSelected)}
			/>
		</View>
	)
});

const styles = StyleSheet.create(
	{
		container: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		checkBoxLine: {
			position: 'absolute',
			right: 0,
			width: 32,
			height: 12,
			borderRadius: 12,
			backgroundColor: colorsStyles.secondBrightColor.color,
		},
		checkBox: {
			width: 20,
			height: 20,
			borderRadius: '100%',
			backgroundColor: colorsStyles.mainBrightColor.color,
		},
		checked: {
			backgroundColor: colorsStyles.mainDarkGreyColor.color,
			right: 12,
		},
		checkedLine: {
			backgroundColor: colorsStyles.mainGreyColor.color,
		},
	}
)
export default AgreeMailingCheckBox