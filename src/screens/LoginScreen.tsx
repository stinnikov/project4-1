import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LoginWelcomeScreen from "../components/LoginComponents/Screens/LoginWelcomeScreen";
import LoginNumberInputScreen from "../components/LoginComponents/Screens/LoginNumberInputScreen";
import LoginEnterSMSCodeScreen from "../components/LoginComponents/Screens/LoginEnterSMSCodeScreen";
import useLoginStore from "../store/loginStore";

export const LoginScreen: React.FC = () => {
    const { step } = useLoginStore(); // Используем store

    const renderStep = () => {
        switch (step) {
            case 0:
                return <LoginWelcomeScreen />;
            case 1:
                return <LoginNumberInputScreen />;
            case 2:
                return <LoginEnterSMSCodeScreen />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {renderStep()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    stepIndicator: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#e0e0e0",
        margin: 5,
    },
    activeIndicator: {
        backgroundColor: "#007BFF",
    },
});

export default LoginScreen;
