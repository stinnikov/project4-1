"use client"
import { ScrollView, View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';
import CatalogScreen from '@/src/screens/CatalogScreen';

export default function () {
    return (
        <CatalogScreen />
    )
}

const styles = StyleSheet.create({

})