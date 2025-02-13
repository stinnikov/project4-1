import { colorsStyles } from '@/src/styles/styles';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions=
      {{
        headerShown: false,
        statusBarStyle: 'light',
        statusBarBackgroundColor: 'transparent',
        contentStyle: { backgroundColor: colorsStyles.mainWhiteColor.color.toString() },
      }}>
    </Stack >
  );
}