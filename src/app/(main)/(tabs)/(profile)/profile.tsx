import ProfileScreen from '@/src/screens/ProfileScreen';
import { Text, View, StyleSheet } from 'react-native';

export default function () {
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