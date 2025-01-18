import { useLocalSearchParams, useRouter as router } from 'expo-router';
import ProductListScreen from '@/app/screens/ProductListScreen';
import { useState, useEffect } from 'react';
import { getProductsByCategoryId } from '@/app/services/ProductService';
import { Product } from '@/app/interfaces/Product';
import { getCategoryNameById } from '@/app/services/CategoryService';


export default function () {

    const { productList: categoryId } = useLocalSearchParams();
    const [categoryName, setCategoryName] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    if (typeof categoryId === 'string') {
        useEffect(() => {
            const getEntries = async () => {
                try {
                    var [getProductsResponse, getCategoryNameResponse] = await Promise.all(
                        [getProductsByCategoryId(categoryId),
                        getCategoryNameById(categoryId)])

                    if (getProductsResponse && getCategoryNameResponse) {
                        setProducts(getProductsResponse);
                        setCategoryName(getCategoryNameResponse)
                    }
                }
                finally {
                    setLoading(false);
                }
            }
            getEntries();
        }, [])
    }


    if (loading) {

    }

    if (categoryName && products)
        return (
            <ProductListScreen products={products} categoryName={categoryName} router={router()}></ProductListScreen>
        )
}