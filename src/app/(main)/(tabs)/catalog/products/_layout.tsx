import React, { useCallback } from "react";
import { Stack, useFocusEffect, useNavigation, useRouter } from "expo-router"
import { colorsStyles } from "@/src/styles/styles";

export default function () {
    return (
        <Stack screenOptions={
            {
                headerShown: false,
                statusBarStyle: 'light',
                statusBarBackgroundColor: colorsStyles.mainBrightColor.color.toString(),
                statusBarTranslucent: false,
            }} />
    )
}