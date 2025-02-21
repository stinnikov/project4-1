import ProfileScreen from '@/src/screens/ProfileScreen';
import useNavigationStore from '@/src/store/navigationStore';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function () {
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);
    return (
        <ProfileScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});