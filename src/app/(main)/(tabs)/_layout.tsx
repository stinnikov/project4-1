import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Stack, Tabs, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles } from '@/src/styles/styles';
import { CommonActions } from '@react-navigation/native';


const iconColor: string = colorsStyles.mainBrightColor.color.toString();

const iconSize: number = 30;

const iconLabelShown: boolean = true;

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

			}}
		>
			<Tabs.Screen name="catalog"
				options={{
					freezeOnBlur: true,
					title: 'Каталог',
					headerShown: headerShown,
					tabBarLabel: ({ focused, children }) => (
						<Text style={focused ? styles.activeTabBarLabel : styles.tabBarLabel}>{children}</Text>
					),
					tabBarIcon: ({ color, focused }) => (
						<svgIcons.CatalogIcon stroke={focused ? color : 'black'}></svgIcons.CatalogIcon>
					),
				}}

			/>

			<Tabs.Screen name="(favourites)" options={{
				title: 'Избранное',
				headerShown: headerShown,
				tabBarLabel: ({ focused, children }) => (
					<Text style={focused ? styles.activeTabBarLabel : styles.tabBarLabel}>{children}</Text>
				),
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.FavoritesIcon stroke={focused ? color : '#000'}></svgIcons.FavoritesIcon>
				),
			}} />
			<Tabs.Screen name="(home)" options={{
				title: 'Главная',

				headerShown: headerShown,
				tabBarLabel: ({ focused, children }) => (
					<Text style={focused ? styles.activeTabBarLabel : styles.tabBarLabel}>{children}</Text>
				),
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.CircleIcon fill={focused ? color : 'none'}></svgIcons.CircleIcon>
					//заменить иконку на лого
				),
			}} />
			< Tabs.Screen name="(profile)" options={{
				title: 'Профиль',
				headerShown: headerShown,
				tabBarLabel: ({ focused, children }) => (
					<Text style={focused ? styles.activeTabBarLabel : styles.tabBarLabel}>{children}</Text>
				),
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.ProfileIcon fill={focused ? color : 'none'}></svgIcons.ProfileIcon>
				),
			}} />
			< Tabs.Screen name="(basket)" options={{
				headerShown: headerShown,
				title: 'Корзина',
				tabBarLabel: ({ focused, children }) => (
					<Text style={focused ? styles.activeTabBarLabel : styles.tabBarLabel}>{children}</Text>
				),
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.TabBarBasketIcon stroke={focused ? color : '#000'}></svgIcons.TabBarBasketIcon>
				),
			}} />
		</Tabs >
	);
}

const styles = StyleSheet.create(
	{
		tabBarLabel: {
			fontSize: 11,
			letterSpacing: -0.03,
			fontFamily: 'Montserrat_500Medium',
			color: 'black',
		},
		activeTabBarLabel: {
			fontSize: 11,
			letterSpacing: -0.03,
			fontFamily: 'Montserrat_500Medium',
			color: colorsStyles.mainBrightColor.color,
		}
	}
)

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