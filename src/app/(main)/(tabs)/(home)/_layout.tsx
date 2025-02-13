import React from "react";
import { colorsStyles } from "@/src/styles/styles"
import { Stack } from "expo-router"

export default function () {
    return (
        <Stack screenOptions={{
            headerShown: false,
            statusBarStyle: 'dark',
            statusBarBackgroundColor: 'transparent',
            statusBarTranslucent: true,
            contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color },
        }}>
            <Stack.Screen name="home" />
        </Stack>
    )
}