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
		{ text: "История покупок", icon: <svgIcons.PurchaseHistoryIcon stroke={'black'} /> },
		{ text: "Мои адреса", icon: <svgIcons.MyAddressesIcon /> },
		{ text: "Способ оплаты", icon: <svgIcons.PaymentMethodIcon /> },
		{ text: "Уведомления", icon: <svgIcons.NotificationsIcon strokeWidth={1.25} stroke={'black'} /> },
		{ text: "Правовая информация", icon: <svgIcons.LegalInformationIcon /> },
		{ text: "Настройки", icon: <svgIcons.ProfileSettingsIcon strokeWidth={1.25} stroke={'black'} /> },
		{ text: "Сотрудничество", icon: <svgIcons.CooperationIcon /> },
	]
	function renderLineProfile({ item }: { item: ProfileLineElement }) {
		return (
			<TouchableOpacity style={styles.container}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ marginHorizontal: 4 }}>
						{item.icon}
					</View>
					<Montserrat400RegularText
						text={item.text}
					/>
				</View>
				<View>
					<svgIcons.ArrowRightIcon />
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
		justifyContent: 'space-between',
		minHeight: 40,
		borderTopWidth: 1,
		borderColor: '#cfcfcf',

	},

	userNameAndArrow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})

export default ProfileList;
