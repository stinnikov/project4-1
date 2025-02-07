import ProfileScreen from '@/src/screens/ProfileScreen';
import { useRouter } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function () {
    const router = useRouter();
    return (
        <ProfileScreen router={router} />
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