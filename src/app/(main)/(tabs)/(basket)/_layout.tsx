import { Stack } from "expo-router"
import { colorsStyles } from "@/src/styles/styles"

export default function BasketLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color } }}>
            <Stack.Screen name="basket"></Stack.Screen>
        </Stack>
    )
}