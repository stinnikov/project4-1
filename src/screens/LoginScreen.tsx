import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colorsStyles } from "@/src/styles/styles";
import ScreenHeader from "../components/ScreenHeader";
import { useRouter } from "expo-router";
import { Montserrat400RegularText, Raleway500MediumText, Raleway600SemiBoldText } from "../components/Text/TextComponents";
import { LoginByNumberButton } from "../components/Buttons/LoginByNumberButton";
import { StatusBar } from "expo-status-bar";

export const LoginScreen: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={[styles.container, { backgroundColor: colorsStyles.mainBrightColor.color }]}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                <View>
                    <ScreenHeader title='Логин' />
                </View>
                <View style={styles.mainTextContainer}>
                    <Raleway600SemiBoldText
                        style={{
                            color: colorsStyles.mainWhiteColor.color,
                            fontSize: 32,
                        }}
                        text={"Наша миссия:"}
                    />
                    <Montserrat400RegularText
                        style={{ color: colorsStyles.mainWhiteColor.color, marginTop: 24 }}
                        text="Здесь должно находиться красивое описание"
                    />
                </View>
                <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                    <LoginByNumberButton
                        style={{ paddingHorizontal: 12, marginBottom: 30 }}
                    />
                </View>
            </SafeAreaView >
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        mainTextContainer: {
            flex: 1,
            marginHorizontal: 16,
        }
    }
)

export default LoginScreen;