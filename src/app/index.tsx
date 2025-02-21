import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { isAuthorisedAsync } from '@/src/services/AuthService';
import LoadingScreen from '@/src/screens/LoadingScreen';
import LoginScreen from '@/src/screens/LoginScreen';
import { enableScreens } from 'react-native-screens';
import AuthProvider, { useAuth } from '../components/temp/AuthContext';
import useNavigationStore from '../store/navigationStore';

const App: React.FC = () => {
    enableScreens(true);
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
};

const Main: React.FC = () => {
    const router = useRouter();
    const { setAuth, isAuth } = useAuth(); // Получите контекст авторизации
    const setRouter = useNavigationStore(state => state.setRouter);
    const [loading, setLoading] = useState<boolean>(true);
    setAuth(false);

    useEffect(() => {
        setRouter(router);
    }, [router, setRouter]);

    useEffect(() => {
        const getEntry = async () => {
            try {
                const authResponse = await isAuthorisedAsync();
                if (authResponse) {
                    setAuth(true);
                }
            } finally {
                setLoading(false);
            }
        };
        getEntry();
    }, [setAuth]);

    useEffect(() => {
        if (isAuth) {
            router.replace('/(main)/(tabs)/(home)/home');
        }
    }, [isAuth]);

    if (loading) {
        return <LoadingScreen />;
    }

    return isAuth ? null : <LoginScreen />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
});

export default App;
