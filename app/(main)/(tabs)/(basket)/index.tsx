
import ProductListComponent from '@/app/components/ProductListComponent';
import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '@/app/interfaces/Product';

export default function BasketScreen() {
	const router = useRouter();
	const data: Product[] = [{
		"id": "60470940-b9fe-11ea-80c9-002590bc5b5f",
		"name": "Professional Estel XTRO EX/NY Пигмент прямого действия для волос Желтый 100мл ",
		"price": '510',
		"description": "Описание отсутствует",
		"imageUrl": "",
	},
	{
		"id": "33a733e9-b9ff-11ea-80c9-002590bc5b5f",
		"name": "CUREX VOLUME CR200/SO Спрей \"Живой объем\" для всех типов волос 200мл",
		"price": '490',
		"description": "Описание отсутствует",
		"imageUrl": "",
	},
	{
		"id": "7461d95b-bab1-11ea-80c9-002590bc5b5f",
		"name": "Тарелка глубокая d-15см (У-12/96)",
		"price": '109',
		"description": "Описание отсутствует",
		"imageUrl": "",
	}]
	return (
		<View style={styles.container}>
			<ProductListComponent
				data={data}
				router={router}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
	},
	text: {
		color: '#fff',
	},
});
