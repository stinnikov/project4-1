import { Stack } from "expo-router"

export default function FavouritesScreen() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="favourites"></Stack.Screen>
        </Stack>
    )
}