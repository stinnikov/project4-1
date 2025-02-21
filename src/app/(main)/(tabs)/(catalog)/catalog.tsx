"use client"
import { ScrollView, View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';
import CatalogScreen from '@/src/screens/CatalogScreen';
import useNavigationStore from '@/src/store/navigationStore';
import { useEffect } from 'react';

export default function () {
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);
    return (
        <CatalogScreen />
    )
}

const styles = StyleSheet.create({

})