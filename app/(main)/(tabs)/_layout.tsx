import React from 'react';
import { Image } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import svgIcons from '@/assets/icons/svgIcons';
import commonStyles from '@/app/styles/commonStyles';


const iconColor: string = `${commonStyles.mainBrightColor.color}`;

const iconSize : number = 30;

const iconLabelShown: boolean = true;

const iconLabelFontSize: number = 14;

const headerShown : boolean = false;


export default function TabLayout() {
	return (
		<Tabs
			
			screenOptions={{
				tabBarAllowFontScaling:false,
				tabBarActiveTintColor: iconColor,
				tabBarShowLabel: iconLabelShown,
				tabBarStyle: {
					alignItems:'center',
					flexDirection:'row',
				},
				
				tabBarLabelStyle:{
					fontSize:iconLabelFontSize,
				}
			}}
		>
			<Tabs.Screen name="(Catalog)" options={{
				
				title: "Catalog",
				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.CatalogIcon fill={focused ? color: 'black'}></svgIcons.CatalogIcon>
				),
			}}
			/>

			< Tabs.Screen name="favourites" options={{
				title: 'Favorites',
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.FavoritesIcon stroke={focused ? color: '#000'}></svgIcons.FavoritesIcon>
				),
			}} />
			<Tabs.Screen name="(index)" options={{
				title:'Main',
				
				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.CircleIcon fill={focused ? color: 'none'}></svgIcons.CircleIcon>
					//заменить иконку на лого
				),
			}} />
			< Tabs.Screen name="profile" options={{
				title: 'Profile',
				headerShown: headerShown,
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.ProfileIcon fill={focused ? color: 'none'}></svgIcons.ProfileIcon>
				),
			}} />
			< Tabs.Screen name="basket" options={{
				headerShown: headerShown,
				title: 'Basket',
				tabBarIcon: ({ color, focused }) => (
					<svgIcons.BasketIcon stroke={focused ? color: '#000'}></svgIcons.BasketIcon>
				),
			}} />
		</Tabs >
	);
}