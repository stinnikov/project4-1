
import { View, StyleSheet } from 'react-native';
import { colorsStyles } from '@/src/styles/styles';
import BasketScreen from '@/src/screens/BasketScreen';
import { useRouter } from 'expo-router';
import useNavigationStore from '@/src/store/navigationStore';
import { useEffect, useState } from 'react';
import useBasketStore from '@/src/store/basketStore';
import LoadingScreen from '@/src/screens/LoadingScreen';

export default function () {
	const [loading, setLoading] = useState<boolean>(true);
	const { initializeBasket } = useBasketStore();

	useEffect(() => {
		initializeBasket().finally(() => { setLoading(false) });
	}, [initializeBasket]);

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<BasketScreen />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colorsStyles.mainGreyColor.color,
	},
	text: {
		color: '#fff',
	},
});
