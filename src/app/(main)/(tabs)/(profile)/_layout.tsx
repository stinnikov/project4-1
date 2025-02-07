import { Stack } from "expo-router"

export default function() {
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name='profile' />
        </Stack>
    )
}