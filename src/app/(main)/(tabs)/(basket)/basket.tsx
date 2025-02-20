
import { View, StyleSheet } from 'react-native';
import { colorsStyles } from '@/src/styles/styles';
import BasketScreen from '@/src/screens/BasketScreen';
import { useRouter } from 'expo-router';
import useNavigationStore from '@/src/store/navigationStore';
import { useEffect, useState } from 'react';
import useBasketStore from '@/src/store/basketStore';
import LoadingScreen from '@/src/screens/LoadingScreen';

export default function () {
	const router = useRouter();
	const setRouter = useNavigationStore(state => state.setRouter);
	const [loading, setLoading] = useState<boolean>(true);
	const { initializeBasket } = useBasketStore();

	useEffect(() => {
		// Устанавливаем router в Zustand хранилище
		setRouter(router);
		initializeBasket().finally(() => { setLoading(false) });
	}, [router, setRouter, initializeBasket]);

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
