import { Stack } from "expo-router"

export default function CategoryLayout() {
    return (
        <Stack screenOptions={
            {
                headerShown: false,
                contentStyle: { backgroundColor: 'white' }
            }} />
    )
}