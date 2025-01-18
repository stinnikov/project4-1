"use client"
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native'
import { Stack, useRouter as router } from 'expo-router';
import CatalogScreen from '@/app/screens/CatalogScreen';
import { useState, useEffect } from 'react';
import { Category } from '@/app/interfaces/Category';
import { getCategoriesDepthZero } from '@/app/services/CategoryService';

export default function () {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntries = async () => {
            try {
                const cats = await getCategoriesDepthZero();
                if (cats !== undefined)
                    setCategories(cats);
            }
            finally {
                setLoading(false);
            }
        }
        getEntries();
    }, [])

    if (loading) {

    }

    if (categories)
        return (
            <View style={{ flex: 1 }}>
                <CatalogScreen categories={categories} router={router()}></CatalogScreen>
                <Stack initialRouteName=''></Stack>
            </View>
        )
}

const styles = StyleSheet.create({

})