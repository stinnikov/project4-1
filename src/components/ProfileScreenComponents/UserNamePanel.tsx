import React, { useMemo, useCallback } from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';
import { Router } from 'expo-router';
import svgIcons from '@/src/assets/icons/svgIcons';
import { Montserrat400RegularText, Raleway600SemiBoldText } from '../Text/TextComponents';

interface UserPanelProps {
	userName: string,
}

export const UserNamePanel: React.FC<UserPanelProps> = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.userNameAndArrow}>
				<Raleway600SemiBoldText text={props.userName} />
				<svgIcons.ArrowRightIcon />
			</View>
			<Montserrat400RegularText text="Мои данные" style={{ fontSize: 14 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 8,
	},
	userNameAndArrow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
})
export default UserNamePanel;