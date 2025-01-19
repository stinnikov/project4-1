import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { colorsStyles } from "../styles/styles";

export function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colorsStyles.mainBrightColor.color} />
            <Text>Загрузка...</Text>
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