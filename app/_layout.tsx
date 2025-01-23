import { Stack } from 'expo-router';
import * as loadFonts from '@/assets/fonts/loadFonts';
import { colorsStyles } from './styles/styles';

export default function RootLayout() {
    loadFonts.loadFontSourceSansPro();
    loadFonts.loadFontMontserrat();
    return (
        <Stack screenOptions={{ headerShown: false, statusBarBackgroundColor: colorsStyles.mainBrightColor.color.toString() }}>
        </Stack>
    );
}