import { Stack, useRouter } from 'expo-router';
import * as loadFonts from '@/src/assets/fonts/loadFonts';
import { colorsStyles } from '@/src/styles/styles';
import useNavigationStore from '../store/navigationStore';
import { useEffect } from 'react';

export default function RootLayout() {
    const { setRouter } = useNavigationStore();
    const router = useRouter();
    useEffect(() => {
        setRouter(router);
    }, [setRouter, router])


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