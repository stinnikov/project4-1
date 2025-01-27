
import ProductListComponent from '@/src/components/ProductListComponent';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { prods } from '@/src/data/tempData';
import { colorsStyles } from '@/src/styles/styles';

export default function BasketScreen() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<ProductListComponent
				data={prods}
				router={router}
			/>
		</View>
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
