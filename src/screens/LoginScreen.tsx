import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colorsStyles } from "@/src/styles/styles";
import ScreenHeader from "../components/ScreenHeader";
import { useRouter } from "expo-router";
import TextComponents, { Montserrat400RegularText, Raleway600SemiBoldText } from "../components/Text/TextComponents";
import { LoginByNumberButton } from "../components/LoginComponents/LoginByNumberButton";
import { StatusBar } from "expo-status-bar";
import { NumberInput } from "../components/LoginComponents/NumberInput";
import { AgreeMailingCheckBox } from "../components/LoginComponents/AgreeMailingCheckBox";
import { ContinueButton } from "../components/LoginComponents/ContinueButton";
import { TextWithLink } from "../components/LoginComponents/TextWithLink";
import { CodeInput } from "../components/LoginComponents/CodeInput";
import PhoneInput from "../components/LoginComponents/ChatInput";

export const LoginScreen: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const [number, onChangeNumber] = React.useState('');

    if (false) {
        return (
            <SafeAreaProvider style={{ flex: 1 }}>
                <SafeAreaView style={[styles.container, { backgroundColor: colorsStyles.mainBrightColor.color }]}>
                    <StatusBar />
                    <ScreenHeader color={colorsStyles.mainWhiteColor.color} title='Логин' />
                    <View style={[styles.mainTextContainer, { marginTop: 110 }]}>
                        <Raleway600SemiBoldText
                            style={{
                                color: colorsStyles.mainWhiteColor.color,
                                fontSize: 32,
                            }}
                            text={"Наша миссия:\nПольза людям"}
                        />
                        <Montserrat400RegularText
                            style={{ color: colorsStyles.mainWhiteColor.color, marginTop: 24 }}
                            text="Здесь должно находиться красивое описание"
                        />
                    </View>
                    <LoginByNumberButton
                        style={styles.button}
                    />
                </SafeAreaView >
            </SafeAreaProvider>
        )
    }
    if (true) {
        return (
            <SafeAreaProvider style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <StatusBar style='dark' />
                    <ScreenHeader title='Логин' />
                    <View style={styles.mainTextContainer}>
                        <Raleway600SemiBoldText
                            style={{
                                fontSize: 32,
                                marginTop: 16,
                                marginBottom: 32,
                            }}
                            text={"Введите номер телефона"}
                        />
                        {/* <NumberInput style={{ marginBottom: 32 }} /> */}
                        <PhoneInput style={{ marginBottom: 32 }} />
                        <ContinueButton text="Продолжить" textColor={colorsStyles.mainDarkGreyColor.color} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                            <Montserrat400RegularText
                                text="Соглашаюсь получать новости и специальные предложения"
                            />
                            <AgreeMailingCheckBox />
                            {/* Здесь должен быть чекбокс */}

                        </View>
                        <TextWithLink style={{ marginTop: 16 }} />
                    </View>

                </SafeAreaView >
            </SafeAreaProvider>
        )
    }
    if (false) {
        return (
            <SafeAreaProvider style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <StatusBar style='dark' backgroundColor={colorsStyles.mainBrightColor.color.toString()} />
                    <ScreenHeader title='Логин' />
                    <View style={styles.mainTextContainer}>
                        <Raleway600SemiBoldText
                            style={{
                                fontSize: 32,
                                marginTop: 16,
                                marginBottom: 32,
                            }}
                            text={"Введите код\nиз смс"}
                        />
                        <View style={{ flex: 1 }}>
                            <CodeInput style={{ marginBottom: 32 }} />
                            <ContinueButton text="Подтвердить" textColor={colorsStyles.mainDarkGreyColor.color} />
                            <Montserrat400RegularText
                                style={{ marginTop: 24 }}
                                text="Соглашаюсь получать новости и специальные предложения"
                            />
                            {/* Здесь должен быть чекбокс */}
                            <TextWithLink style={{ marginTop: 16 }} />
                        </View>

                    </View>

                </SafeAreaView >
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        mainTextContainer: {
            flex: 1,
            marginHorizontal: 16,
        },
        button: {
            marginHorizontal: 16,
            marginBottom: 30,
        }
    }
)

export default LoginScreen;