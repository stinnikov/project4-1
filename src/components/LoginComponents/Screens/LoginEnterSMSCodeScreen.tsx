import React from "react";
import { View, StyleSheet } from "react-native";
import { Raleway600SemiBoldText, Montserrat400RegularText } from "../../Text/TextComponents";
import ContinueButton from "../ContinueButton";
import TextWithLink from "../TextWithLink";
import CodeInput from "../CodeInput";
import LoginScreenHeader from "../LoginScreenHeader";


export const LoginEnterSMSCodeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <LoginScreenHeader title='Логин' />
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
                    <ContinueButton text="Подтвердить" />
                    <Montserrat400RegularText
                        style={{ marginTop: 24 }}
                        text="Соглашаюсь получать новости и специальные предложения"
                    />
                    {/* Здесь должен быть чекбокс */}
                    <TextWithLink style={{ marginTop: 16 }} />
                </View>

            </View>
        </View>
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

export default LoginEnterSMSCodeScreen;