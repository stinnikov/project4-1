import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams } from 'expo-router';
import ProductList from '../components/ProductList';
import { categories } from '@/app/data/categories';
import { products } from '../data/products';
import {ScrollView} from 'react-native';
import { getNameOfProductById, getNameOfCategoryById } from '../utils/usefulFunctions';

export default function(){

    const { page: categoryId } = useLocalSearchParams();
   
    const productsByCategoryId = products.filter(i => i.categoryIds.includes(categoryId.toString()));

    let subSubCategories = categories.filter(cat => cat.depth == 2);

    let titleName: string|undefined;

    if(categoryId != undefined)
    {
        titleName = productsByCategoryId !== undefined ? getNameOfCategoryById(categoryId.toString(), subSubCategories) : "";
    }

    return( 
        <ScrollView>
            <ProductList products={productsByCategoryId}></ProductList>
            <Stack.Screen options={{ title: titleName }}></Stack.Screen>
        </ScrollView>
)}