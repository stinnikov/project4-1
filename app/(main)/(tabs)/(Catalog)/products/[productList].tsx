import { useLocalSearchParams, useRouter } from 'expo-router';
import ProductListScreen from '@/app/screens/ProductListScreen';
import { useState, useEffect } from 'react';
import { getProductsByCategoryId } from '@/app/services/ProductService';
import { Product } from '@/app/interfaces/Product';
import { getCategoryNameById } from '@/app/services/CategoryService';
import LoadingScreen from '@/app/screens/LoadingScreen';
import { ActivityIndicator, View, Text } from 'react-native';


export default function () {
    const router = useRouter();
    const { productList: categoryId } = useLocalSearchParams();
    const [categoryName, setCategoryName] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntries = async () => {
            if (typeof categoryId === 'string') {
                try {
                    const [getProductsResponse, getCategoryNameResponse] = await Promise.all(
                        [
                            getProductsByCategoryId(categoryId),
                            getCategoryNameById(categoryId)
                        ]

                    );

                    getProductsResponse && setProducts(getProductsResponse);
                    getCategoryNameResponse && setCategoryName(getCategoryNameResponse);
                }
                finally {
                    setLoading(false);
                }
            } else {
                setLoading(false); // Если categoryId не строка, устанавливаем loading в false
            }
        };

        getEntries();
    }, [categoryId]); // Зависимость от categoryId

    if (loading) {
        return <LoadingScreen></LoadingScreen>;
    }

    if (categoryName && products) {
        return (
            <ProductListScreen products={products} categoryName={categoryName} router={router} />
        );
    }

    return null; // Возвращаем null, если нет данных для отображения
}