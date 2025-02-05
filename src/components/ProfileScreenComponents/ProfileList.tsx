import React, { useMemo, useCallback } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Router } from 'expo-router';
import { Raleway600SemiBoldText } from '../Text/TextComponents';
import { Montserrat400RegularText } from '../Text/TextComponents';
import svgIcons from '@/assets/icons/svgIcons';

interface ProfileListProps {
	router: Router,
}

interface ProfileLineElement {
	text: string,
	icon: JSX.Element,
}

export const ProfileList: React.FC<ProfileListProps> = (props) => {
	const router = props.router;
	const data: ProfileLineElement[] = [
		{ text: "История покупок", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
		{ text: "Мои адреса", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
		{ text: "Способ оплаты", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
		{ text: "Уведомления", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
		{ text: "Правовая информация", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
		{ text: "Настройки", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
		{ text: "Сотрудничество", icon: <svgIcons.CircleIcon height={16} width={16} fill={'black'} /> },
	]
	function renderLineProfile({ item }: { item: ProfileLineElement }) {
		return (
			<TouchableOpacity style={styles.container}>
				<View style={{ marginHorizontal: 4 }}>
					{item.icon}
				</View>
				<Montserrat400RegularText
					style={styles.categoryText}
					text={item.text}
				/>
				<View style={styles.rightIconContainer}>
					<svgIcons.ArrowRightIcon style={[styles.rightIcon]} />
				</View>
			</TouchableOpacity>
		);
	}
	return (
		<View>
			<FlatList
				data={data}
				renderItem={renderLineProfile}
			/>
		</View>

	);

}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 40,
		borderTopWidth: 1,
		borderColor: '#cfcfcf',
	},
	userNameAndArrow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	categoryText: {
		flex: 0.89,
	},
	rightIconContainer: {
		flex: 0.11,
		flexDirection: 'row-reverse',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	rightIcon: {
		paddingRight: 16,
	},
})

export default ProfileList;
