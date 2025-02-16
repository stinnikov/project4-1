import { colorsStyles } from "@/src/styles/styles"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function () {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color }
            }}>

            <Stack.Screen name='profile'
            />
        </Stack>
    )
}