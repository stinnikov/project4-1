import { Stack } from 'expo-router';
import * as loadFonts from '@/src/assets/fonts/loadFonts';
import { colorsStyles } from '@/src/styles/styles';

export default function RootLayout() {
    loadFonts.loadFontRaleway();
    loadFonts.loadFontMontserrat();
    return (
        <Stack
            screenOptions={
                {
                    headerShown: false,
                    contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color },
                    statusBarStyle: 'light',
                    statusBarBackgroundColor: colorsStyles.mainBrightColor.color.toString(),
                }}>
        </Stack>
    );
}