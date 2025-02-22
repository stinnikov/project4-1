import useLoginStore from '@/src/store/loginStore';
import { colorsStyles } from '@/src/styles/styles';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import { Montserrat400RegularText } from '../Text/TextComponents';

export const LoginErrorText: React.FC = React.memo(() => {
    const { error } = useLoginStore();
    return (
        <Montserrat400RegularText text={error ?? ''} style={styles.errorText} />
    )
})

const styles = StyleSheet.create({
    errorText: {
        color: 'red', // Красный цвет для текста ошибки
        marginTop: 8, // Отступ сверху для текста ошибки
        fontSize: 16, // Размер шрифта для текста ошибки
    },
});

export default LoginErrorText;

