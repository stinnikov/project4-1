import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams } from 'expo-router';
import { products } from '@/app/data/products';
import ProductCard from '@/app/components/ProductCard';
import { View, Text } from 'react-native';

export default function(){

    const { product } = useLocalSearchParams();
   
    const productByCategory = products.find(i => i.id == product);

    if(productByCategory == undefined)
    {
        return(
            <Text>это заглушка для пустого продукта</Text>
        )
    }

    return( 
            <ProductCard product={productByCategory} visible={true} imageUrl='https://khakaskosmetika.ru/upload/resize_cache/iblock/37d/450_450_140cd750bba9870f18aada2478b24840a/bdvh27sfg152dtk98fbxnlxickexwcb3.jpg'></ProductCard>
)}