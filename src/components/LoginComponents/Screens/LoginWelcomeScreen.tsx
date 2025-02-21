import React from "react";
import { View, StyleSheet } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Raleway600SemiBoldText, Montserrat400RegularText } from "../../Text/TextComponents";
import LoginByNumberButton from "../LoginByNumberButton";
import LoginScreenHeader from "../LoginScreenHeader";



export const LoginWelcomeScreen: React.FC = () => {
    return (
        <View style={[styles.container, { backgroundColor: colorsStyles.mainBrightColor.color }]}>
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
        </View >
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
        },
        button: {
            marginHorizontal: 16,
            marginBottom: 30,
        }
    }
)

export default LoginWelcomeScreen;