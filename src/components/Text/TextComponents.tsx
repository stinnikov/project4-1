import React, { ReactElement } from "react";
import { View, StyleSheet, Text, TextStyle } from "react-native";


export const PriceText = ({ children, style, ...props }: { children: string, style: TextStyle }) => {
    return (
        <Text style={[styles.text, style]} {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16, // Установите размер шрифта по умолчанию
        color: 'red', // Установите цвет текста по умолчанию
        // Добавьте другие стили по умолчанию
    },
});

export default { PriceText }