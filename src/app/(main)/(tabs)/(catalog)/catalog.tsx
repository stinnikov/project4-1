"use client"
import { ScrollView, View, StyleSheet } from 'react-native'
import CatalogScreen from '@/src/screens/CatalogScreen';
import { useEffect } from 'react';
import useCategoryStore from '@/src/store/categoryStore';
import LoadingScreen from '@/src/screens/LoadingScreen';

export default function () {
    const { catalog, loading, fetchDepthZeroCategories } = useCategoryStore(); // Используем состояние из Zustand
    useEffect(() => {
        fetchDepthZeroCategories();
    }, []);

    if (loading)
        return (<LoadingScreen />)

    return (
        <CatalogScreen />
    )
}

const styles = StyleSheet.create({

})