import { Stack } from 'expo-router';
import * as loadFonts from '@/assets/fonts/loadFonts';

export default function RootLayout() {
    loadFonts.loadFontSourceSansPro();
    loadFonts.loadFontMontserrat();
    return (
        <Stack screenOptions={{ headerShown: false, statusBarBackgroundColor: 'black' }}>
        </Stack>
    );
}