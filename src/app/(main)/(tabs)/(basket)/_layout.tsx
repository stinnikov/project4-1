import { Stack } from "expo-router"

export default function BasketLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="basket"></Stack.Screen>
        </Stack>
    )
}