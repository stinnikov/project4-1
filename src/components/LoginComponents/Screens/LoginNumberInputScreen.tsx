import React from "react";
import { View, StyleSheet } from "react-native";
import { Raleway600SemiBoldText, Montserrat400RegularText } from "../../Text/TextComponents";
import ChatInput from "../ChatInput";
import ContinueButton from "../ContinueButton";
import AgreeMailingCheckBox from "../AgreeMailingCheckBox";
import TextWithLink from "../TextWithLink";
import LoginScreenHeader from "../LoginScreenHeader";
import useLoginStore from "@/src/store/loginStore";
import LoginErrorText from "../LoginErrorText";


export const LoginNumberInputScreen: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <LoginScreenHeader title='Логин' />
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
                <ChatInput style={{ marginBottom: 32 }} />
                <ContinueButton text="Продолжить" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                    <Montserrat400RegularText
                        text="Соглашаюсь получать новости и специальные предложения"
                    />
                    <AgreeMailingCheckBox />
                    {/* Здесь должен быть чекбокс */}

                </View>
                <TextWithLink style={{ marginTop: 16 }} />
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

export default LoginNumberInputScreen;