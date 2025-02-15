import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Router } from 'expo-router';
import { Montserrat600SemiBoldText } from '../Text/TextComponents';
import { colorsStyles } from '@/src/styles/styles';

interface MakeOrderButtonProps {
    style?: ViewStyle | ViewStyle[]
}

const MakeOrderButton: React.FC<MakeOrderButtonProps> = React.memo((props) => {
    return (
        <TouchableOpacity style={[styles.container, props.style]}>
            <Montserrat600SemiBoldText style={{ fontSize: 20, color: colorsStyles.mainWhiteColor.color }} text='Заказать' />
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        backgroundColor: colorsStyles.mainBrightColor.color,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default React.memo(MakeOrderButton)