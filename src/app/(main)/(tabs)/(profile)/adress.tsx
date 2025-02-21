"use client"
import { ScrollView, View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';
import MyAddressesScreen from '@/src/screens/MyAddressesScreen';


export default function () {
	return (
		<MyAddressesScreen />
	)
}

const styles = StyleSheet.create({

})