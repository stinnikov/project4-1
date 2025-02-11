import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Montserrat400RegularText, Montserrat500MediumText } from '../Text/TextComponents';
import { Router } from 'expo-router';
import { colorsStyles } from '@/src/styles/styles';

interface PromotionInBasketProps {
    router: Router;
    style?: ViewStyle | ViewStyle[]
}

const PromotionInBasketForm: React.FC<PromotionInBasketProps> = React.memo((props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Montserrat500MediumText style={{ paddingVertical: 8, paddingHorizontal: 16 }} text='Промокод' />

            <TouchableOpacity style={styles.textForm}>
                <Montserrat400RegularText
                    style={styles.text}
                    text='Введите промокод' />

                <TouchableOpacity style={{
                    backgroundColor: colorsStyles.mainBrightColor.color,
                    paddingVertical: 8,
                    paddingHorizontal: 10,
                    marginRight: 12,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Montserrat400RegularText
                        style={{ color: colorsStyles.mainWhiteColor.color, fontSize: 14 }}
                        text='Применить'
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </View >
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderRadius: 12,
        elevation: 5,
        shadowRadius: 16,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    textForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        borderRadius: 12,
        marginHorizontal: 16,
        marginBottom: 16,
        alignItems: 'center',

    },
    text: {
        paddingLeft: 12,
        paddingVertical: 20,
        color: colorsStyles.mainDarkGreyColor.color
    }
})

export default React.memo(PromotionInBasketForm)