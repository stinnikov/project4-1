import { Stack } from 'expo-router';
import * as loadFonts from '@/src/assets/fonts/loadFonts';
import { colorsStyles } from '@/src/styles/styles';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    loadFonts.loadFontRaleway();
    loadFonts.loadFontMontserrat();
    return (
        <Stack
            screenOptions={
                {
                    headerShown: false,
                    contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color },
                }}>
        </Stack>
    );
}