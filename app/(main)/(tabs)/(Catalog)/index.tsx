"use client"
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native'
import { useLocalSearchParams, usePathname, Stack, useRouter as router } from 'expo-router';
import CategoryCardListComponent from '@/app/components/CategoryCardListComponent';
import { categories } from '@/app/data/categories';
import CatalogScreen from '@/app/screens/CatalogScreen';
import MainScreen from '@/app/screens/MainScreen';
import { useState,useEffect } from 'react';
import { Category } from '@/app/interfaces/Category';
import { getCategoriesDepthZero } from '@/app/services/CategoryService';

export default function () {
    const { category } = useLocalSearchParams();

    const [Categories,setCategories] = useState<Category[]>([]);




    useEffect(()=>{
        const getEntries = async()=>{
            const cats = await getCategoriesDepthZero();
            if(cats!==undefined)
            setCategories(cats);
        }
        getEntries();
    },[])

    return (
        <View style={{flex:1}}>
            <CatalogScreen data={Categories} router={router()}></CatalogScreen>
            <Stack initialRouteName=''></Stack>
        </View>
    )
}

const styles = StyleSheet.create({

})