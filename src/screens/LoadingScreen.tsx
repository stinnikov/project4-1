import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat400RegularText } from "../components/Text/TextComponents";

export function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colorsStyles.mainBrightColor.color} />
            <Montserrat400RegularText text="Загрузка..." style={{ fontSize: 20, color: colorsStyles.mainBrightColor.color }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingScreen;