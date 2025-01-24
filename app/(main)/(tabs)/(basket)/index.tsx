
import ProductListComponent from '@/app/components/ProductListComponent';
import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { prods } from '@/app/data/tempData';
import { colorsStyles } from '@/app/styles/styles';

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
