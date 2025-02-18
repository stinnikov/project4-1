import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colorsStyles } from "../styles/styles";
import ScreenHeader from "../components/ScreenHeader";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import UserNamePanel from "../components/ProfileScreenComponents/UserNamePanel";
import BonusCard from "../components/MainScreenComponents/BonusCard";
import ProfileList from "../components/ProfileScreenComponents/ProfileList";
import HelpAndSupport from "../components/ProfileScreenComponents/HelpAndSupport";
import useNavigationStore from "../store/navigationStore";

interface ProfileScreenProps {
}



export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	const [profileScreenData, setProfileScreenData] = useState<ProfileScreenProps[]>([{}]);

	const router = useRouter();
	const setRouter = useNavigationStore(state => state.setRouter);

	useEffect(() => {
		// Устанавливаем router в Zustand хранилище
		setRouter(router);
	}, [router, setRouter]);

	function renderScreen({ item }: { item: ProfileScreenProps }) {
		return (
			<View>
				<ScreenHeader title="Профиль"></ScreenHeader>
				<View style={styles.userNamePanel}>
					<UserNamePanel userName="Имя пользователя" />
				</View>
				<View style={styles.bonusCard}>
					<BonusCard />
				</View>
				<View style={styles.listProfile}>
					<ProfileList />
				</View>
				<View>
					<HelpAndSupport />
				</View>
			</View>
		)
	}
	return (
		<SafeAreaProvider style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }} edges={['top']}>
				<FlatList
					overScrollMode="never"
					data={profileScreenData}
					bounces={false}
					renderItem={renderScreen}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colorsStyles.mainDarkColor.color,
	},
	listProfile: {
		margin: 16,
	},

	userNamePanel: {
		margin: 16,
		marginTop: 0,
	},
	bonusCard: {
		marginTop: 8,
		marginHorizontal: 16,
	}
})

export default ProfileScreen;