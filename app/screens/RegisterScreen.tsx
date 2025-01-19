import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { commonStyles, colorsStyles } from "../styles/styles";

export const RegisterScreen: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <Text style={styles.textTitle}>Register</Text>

                <View style={{ padding: 10 }}>
                    <Text style={styles.textInputTitle}>UserName</Text>
                    <TextInput
                        style={styles.textInput}
                        value={userName}
                        onChangeText={setUserName}
                    />

                    <Text style={styles.textInputTitle}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.textInputTitle}>Phone</Text>
                    <TextInput
                        style={styles.textInput}
                        value={phone}
                        onChangeText={setPhone}
                    />

                    <Text style={styles.textInputTitle}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Text style={styles.textInputTitle}>Confirm Password</Text>
                    <TextInput
                        style={styles.textInput}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
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
            fontFamily: commonStyles.text.fontFamily,
            padding: 10,
        },
        textTitle: {
            fontSize: 26,
            fontWeight: 'semibold',
            fontFamily: commonStyles.text.fontFamily,
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
            fontFamily: commonStyles.text.fontFamily
        },
        form: {
            alignContent: 'stretch',
        }
    }
)

export default RegisterScreen;