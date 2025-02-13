import React from "react";
import { Stack } from "expo-router"
import { colorsStyles } from "@/src/styles/styles";

export default function () {
    return (
        <Stack screenOptions={
            {
                headerShown: false,
                statusBarStyle: 'dark',
                statusBarBackgroundColor: 'white',
                statusBarTranslucent: true,
                contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color.toString() },
            }}>
            <Stack.Screen name="catalog" />
        </Stack>
    )
}