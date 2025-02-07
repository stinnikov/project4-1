
import ProductList from '@/src/components/ProductList';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { prods } from '@/src/data/tempData';
import { colorsStyles } from '@/src/styles/styles';
import BasketScreen from '@/src/screens/BasketScreen';

export default function () {
	const router = useRouter();
	return (
		<BasketScreen router={router} />
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
