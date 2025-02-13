import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Montserrat400RegularText, Montserrat500MediumText } from '../Text/TextComponents';
import { Router } from 'expo-router';
import { colorsStyles } from '@/src/styles/styles';

interface RequestForOrderInBasketProps {
    style?: ViewStyle | ViewStyle[]
}

const RequestForOrderInBasketForm: React.FC<RequestForOrderInBasketProps> = React.memo((props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Montserrat500MediumText
                style={{ paddingBottom: 8 }}
                text='Комментарий к заказу' />

            <TouchableOpacity style={styles.textForm}>
                <Montserrat400RegularText style={styles.text} text='Комментарий' />
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textForm: {
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        paddingVertical: 12,
        paddingLeft: 12,
        borderRadius: 12,
    },
    text: {
        color: colorsStyles.mainDarkGreyColor.color
    }
})

export default React.memo(RequestForOrderInBasketForm);