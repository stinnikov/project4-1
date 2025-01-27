import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '@/app/interfaces/Product';
import FavouritesScreen from '@/app/screens/FavouritesScreen';

export default function () {
    const router = useRouter();

    return (
        <FavouritesScreen categoryName={"Избранное"} router={router} />
    );


    return null; // Возвращаем null, если нет данных для отображения
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});