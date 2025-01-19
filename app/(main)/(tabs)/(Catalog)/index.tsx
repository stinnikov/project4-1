"use client"
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import CatalogScreen from '@/app/screens/CatalogScreen';
import { useState, useEffect } from 'react';
import { Category } from '@/app/interfaces/Category';
import { getCategoriesDepthZero } from '@/app/services/CategoryService';
import LoadingScreen from '@/app/screens/LoadingScreen';

export default function () {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntries = async () => {
            try {
                const getCatsResponse = await getCategoriesDepthZero();
                if (getCatsResponse)
                    setCategories(getCatsResponse);
            }
            finally {
                setLoading(false);
            }
        }
        getEntries();
    }, [])

    if (loading) {
        return (<LoadingScreen></LoadingScreen>)
    }

    if (categories)
        return (
            <View style={{ flex: 1 }}>
                <CatalogScreen categories={categories} router={router}></CatalogScreen>
                <Stack initialRouteName=''></Stack>
            </View>
        )
}

const styles = StyleSheet.create({

})