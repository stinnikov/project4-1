import React from 'react';
import { Image } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import svgIcons from '@/assets/icons/svgIcons';
import { commonStyles, colorsStyles } from '@/app/styles/styles';


const iconColor: string = colorsStyles.mainBrightColor.color.toString();

const iconSize: number = 30;

const iconLabelShown: boolean = true;

const iconLabelFontSize: number = 11;

const headerShown: boolean = false;


export default function TabLayout() {
	return (
		<Tabs
			initialRouteName='(home)'
			screenOptions={{
				tabBarAllowFontScaling: false,
				tabBarActiveTintColor: iconColor,
				tabBarShowLabel: iconLabelShown,
				tabBarStyle: {
					flexDirection: 'row',
				},

				tabBarLabelStyle: {
					fontSize: iconLabelFontSize,
				},
			}}
		>
			<Tabs.Screen name="(catalog)" options={{

				title: "Каталог",
				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.CatalogIcon stroke={focused ? color : 'black'}></svgIcons.CatalogIcon>
				),
			}}
			/>

			< Tabs.Screen name="(favourites)" options={{
				title: 'Избранное',
				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.FavoritesIcon stroke={focused ? color : '#000'}></svgIcons.FavoritesIcon>
				),
			}} />
			<Tabs.Screen name="(home)" options={{
				title: 'Главная',

				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.CircleIcon fill={focused ? color : 'none'}></svgIcons.CircleIcon>
					//заменить иконку на лого
				),
			}} />
			< Tabs.Screen name="(profile)" options={{
				title: 'Профиль',
				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.ProfileIcon fill={focused ? color : 'none'}></svgIcons.ProfileIcon>
				),
			}} />
			< Tabs.Screen name="(basket)" options={{
				headerShown: headerShown,
				title: 'Корзина',
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.BasketIcon stroke={focused ? color : '#000'}></svgIcons.BasketIcon>
				),
			}} />
		</Tabs >
	);
}