import React from "react";
import { Stack } from "expo-router"

export default function () {
    return (
        <Stack screenOptions={
            {
                headerShown: false,
                statusBarStyle: 'dark',
                statusBarBackgroundColor: 'transparent',
                statusBarTranslucent: true,
                contentStyle: { backgroundColor: 'white' },
            }}>
            <Stack.Screen name="catalog" />
        </Stack>
    )
}