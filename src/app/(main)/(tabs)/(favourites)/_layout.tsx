import { colorsStyles } from "@/src/styles/styles"
import { Stack } from "expo-router"

export default function () {
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color } }}>
            <Stack.Screen name="favourites"></Stack.Screen>
        </Stack>
    )
}