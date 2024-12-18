"use client"
import { ScrollView } from 'react-native'
import { useLocalSearchParams, usePathname, Stack } from 'expo-router';
import CategoryList from '@/app/components/CategoryList';
import { categories } from '@/app/data/categories';


export default function () {

    const { category } = useLocalSearchParams();
    const pathName = usePathname()

    return (
            <CategoryList categories={categories} parentLink='/Category' title='Каталог' ></CategoryList>
    )
}