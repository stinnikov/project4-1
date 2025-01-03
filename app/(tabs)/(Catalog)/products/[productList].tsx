import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams, useRouter as router } from 'expo-router';
import ProductList from '@/app/components/ProductList';
import { categories } from '@/app/data/categories';
import { products } from '@/app/data/products';

export default function(){

    const { categoryId } = useLocalSearchParams();

    console.log("categoryId: " + categoryId)

    const productsByCategoryId = products.filter(i => i.categoryIds.includes(categoryId?.toString()));

    return( 
            <ProductList products={productsByCategoryId} router={router()}></ProductList>
)}