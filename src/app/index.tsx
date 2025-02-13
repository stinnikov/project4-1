import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Product } from '@/src/interfaces/Product';
import ProductCardScreen from '@/src/screens/ProductPageScreen';
import { isAuthorisedAsync } from '@/src/services/AuthService';
import LoadingScreen from '@/src/screens/LoadingScreen';
import LoginScreen from '@/src/screens/LoginScreen';
import { enableScreens } from 'react-native-screens';
import 'expo-dev-client';
import useNavigationStore from '../store/navigationStore';

const App: React.FC = () => {
    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

    const [isAuth, setAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntry = async () => {
            try {
                const authResponse = await isAuthorisedAsync();
                if (authResponse)
                    setAuth(true);
            }
            finally {
                setLoading(false);
            }
        }
        getEntry();
    }, [])

    useEffect(() => {
        if (isAuth) {
            router.replace('/(main)/(tabs)/(home)/home');
        }
    }, [isAuth]);

    if (loading) {
        return (<LoadingScreen>

        </LoadingScreen>)

    }

    enableScreens(true);

    return isAuth ? null : <LoginScreen />;
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
    inner: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default App;