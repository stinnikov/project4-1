import { useLocalSearchParams, useRouter } from 'expo-router';
import ProductListScreen from '@/src/screens/ProductListScreen';
import { useState, useEffect } from 'react';
import { getProductsByCategoryIdAsync } from '@/src/services/ProductService';
import { Product } from '@/src/interfaces/Product';
import { getCategoryNameById } from '@/src/services/CategoryService';
import LoadingScreen from '@/src/screens/LoadingScreen';
import { getDataAsync } from '@/src/services/AuthService';


export default function () {
    const router = useRouter();
    const { productList: categoryId } = useLocalSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [categoryName, setCategoryName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntries = async () => {
            if (typeof categoryId === 'string') {
                try {
                    const [getProductsResponse, getCategoryNameResponse] = await Promise.all(
                        [
                            getProductsByCategoryIdAsync(categoryId),
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

    if (typeof categoryId === 'string' && products) {
        return (
            <ProductListScreen parentTab='catalog' products={products} categoryId={categoryId} router={router} />
        );
    }

    return null; // Возвращаем null, если нет данных для отображения
}