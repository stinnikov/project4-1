import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
export const LoginScreen: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.textTitle}>Login</Text>

                <View style={{ padding: 10 }}>
                    <Text style={styles.textInputTitle}>Login</Text>
                    <TextInput
                        style={styles.textInput}
                        value={login}
                        onChangeText={setLogin}
                    />

                    <Text style={styles.textInputTitle}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='visible-password'
                    />
                </View>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Text>{login}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: '#FFFAFA',
            alignContent: 'stretch',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        textInput: {
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            backgroundColor: '#FFFAFA',
            padding: 10,
            fontSize: 18,
        },
        textInputTitle: {
            fontSize: 18,
            borderColor: 'black',
            fontWeight: 'semibold',
            padding: 10,
        },
        textTitle: {
            fontSize: 26,
            fontWeight: 'semibold',
            padding: 10,
            alignSelf: 'center',
        },
        button: {
            backgroundColor: colorsStyles.mainDarkColor.color,
            minHeight: 36,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            fontSize: 18,
            color: colorsStyles.mainWhiteColor.color,
            fontWeight: 'semibold',
        },
        form: {
            alignContent: 'stretch',
        }
    }
)

export default LoginScreen;