import React, { useCallback } from "react";
import { Stack, useFocusEffect, useNavigation, useRouter } from "expo-router"
import { CommonActions } from "@react-navigation/native";

export default function CatalogLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' }, freezeOnBlur: true }} />
    )
}