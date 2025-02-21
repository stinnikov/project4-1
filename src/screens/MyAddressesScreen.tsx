import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colorsStyles } from "../styles/styles";
import ScreenHeader from "../components/ScreenHeader";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import useNavigationStore from "../store/navigationStore";

interface MyAddressesScreenProps {
}

export const MyAddressesScreen: React.FC<MyAddressesScreenProps> = (props) => {
	return (
		<View style={styles.container}>
			<ScreenHeader title="Мои адреса" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default MyAddressesScreen;