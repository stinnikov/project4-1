import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default function FavouritesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Favourite screen</Text>
        </SafeAreaView>
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