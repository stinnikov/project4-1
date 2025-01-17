
import ProductListComponent from '@/app/components/ProductListComponent';
import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { products } from '@/app/data/products';

export default function BasketScreen() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<ProductListComponent 
				data={products}
				router={router}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
	},
});
