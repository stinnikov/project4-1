import React from 'react';
import { Image } from 'react-native';
import { Stack, Tabs, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import svgIcons from '@/src/assets/icons/svgIcons';
import { commonStyles, colorsStyles } from '@/src/styles/styles';
import { CommonActions } from '@react-navigation/native';


const iconColor: string = colorsStyles.mainBrightColor.color.toString();

const iconSize: number = 30;

const iconLabelShown: boolean = true;

const iconLabelFontSize: number = 11;

const headerShown: boolean = false;


export default function TabLayout() {
	return (
		<Tabs
			detachInactiveScreens={true}

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
			<Tabs.Screen name="catalog"
				options={{
					lazy: false,
					freezeOnBlur: true,
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

// listeners={({ navigation }) => ({
// 	tabPress: (e) => {
// 		// Отменяем действие по умолчанию, чтобы предотвратить повторный переход на ту же вкладку
// 		e.preventDefault();

// 		// Сбросить состояние стека
// 		navigation.dispatch(CommonActions.reset({
// 			index: 0, // Указываем индекс, на который нужно перейти
// 			routes: [{ name: 'catalog' }] // Указываем экран, который нужно открыть
// 		}));
// 	},
// })}