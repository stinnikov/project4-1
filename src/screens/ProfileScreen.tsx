import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colorsStyles } from "../styles/styles";
import ScreenHeader from "../components/ScreenHeader";
import { Router } from "expo-router";
import UserNamePanel from "../components/ProfileScreenComponents/UserNamePanel";
import BonusCard from "../components/MainScreenComponents/BonusCard";
import CategoryList from "../components/CatalogScreenComponents/CategoryList";
import ProfileList from "../components/ProfileScreenComponents/ProfileList";

interface ProfileScreenProps {
	router: Router,
}



export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
	const router = props.router;
	const [profileScreenData, setProfileScreenData] = useState<ProfileScreenProps[]>([{ router }]);

	function renderScreen({ item }: { item: ProfileScreenProps }) {
		return (
			<View>
				<View style={styles.screenHeader}>
					<ScreenHeader title="Профиль" router={router}></ScreenHeader>
				</View>
				<View style={styles.userNamePanel}>
					<UserNamePanel router={router} userName="Имя пользователя" />
				</View>
				<View style={styles.bonusCard}>
					<BonusCard />
				</View>
				<View style={styles.listProfile}>
					<ProfileList router={router} />
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
	screenHeader: {
		margin: 16,
	},
	userNamePanel: {
		margin: 16,
	},
	bonusCard: {
		marginTop: 8,
		marginHorizontal: 16,
	}
})

export default ProfileScreen;