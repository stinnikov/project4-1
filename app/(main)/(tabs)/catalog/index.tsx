"use client"
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import CatalogScreen from '@/app/screens/CatalogScreen';

export default function () {
    const router = useRouter();

    return (
        <CatalogScreen router={router}></CatalogScreen>
    )
}

const styles = StyleSheet.create({

})