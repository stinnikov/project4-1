import React, { useCallback } from "react";
import { Stack, useFocusEffect, useNavigation, useRouter } from "expo-router"

export default function CatalogLayout() {
    return (
        <Stack screenOptions={
            {
                headerShown: false,
                contentStyle: { backgroundColor: 'white' }
            }} />
    )
}