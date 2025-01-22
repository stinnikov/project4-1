import React, { NewLifecycle, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colorsStyles } from './styles/styles';
import { useRouter } from 'expo-router';
import { isAuthorised } from './services/AuthService';
import HomeScreen from './(main)/(tabs)/(home)';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';

const App: React.FC = () => {
    const router = useRouter();
    const [isAuth, setAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEntry = async () => {
            try {
                const authResponse = await isAuthorised();
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
            router.replace('/(main)/(tabs)/(home)');
        }
    }, [isAuth]);

    if (loading) {
        return (<LoadingScreen></LoadingScreen>)
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


// return (
//     <SafeAreaView style={styles.container}>
//         <View style={styles.inner}>
//             <TouchableOpacity
//                 onPress={handlePress}
//                 style={{ height: 100, width: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: colorsStyles.mainBrightColor.color, borderRadius: 12, margin: 16 }}>
//                 <Text style={{ color: colorsStyles.mainWhiteColor.color }}>Перейти к приложению</Text>
//             </TouchableOpacity>
//         </View>
//     </SafeAreaView>
// );