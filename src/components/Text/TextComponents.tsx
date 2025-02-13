import { colorsStyles } from "@/src/styles/styles";
import React, { ReactElement } from "react";
import { View, StyleSheet, Text, TextStyle } from "react-native";


interface TextProps {
    text: string | undefined,
    style?: TextStyle | TextStyle[],
    numOfLines?: number,
}


export const Montserrat600SemiBoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.montserrat600SemiBold, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Montserrat500MediumText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.montserrat500Medium, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Montserrat400RegularText: React.FC<TextProps> = (props) => {
    return (
        <Text numberOfLines={props.numOfLines ?? 4} style={[styles.montserrat400Regular, props.style]}>
            {props.text ?? ''}
        </Text>

    );
};

export const Montserrat300LightText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.montserrat300LightText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway600SemiBoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text
            style={[styles.raleway600SemiBold, style]}
        >
            {text ?? ''}
        </Text>
    );
};



export const Raleway700BoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.raleway700Bold, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway500MediumText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.raleway500Medium, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway400RegularText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.raleway400Regular, style]}>
            {text ?? ''}
        </Text>
    );
};

const styles = StyleSheet.create({
    montserrat600SemiBold: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
    },
    montserrat500Medium: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
    },
    montserrat400Regular: {
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: -0.03,

    },
    montserrat300LightText: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Montserrat_300Light',
        letterSpacing: -0.03,
    },
    raleway700Bold: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Raleway_700Bold',
        includeFontPadding: false,
    },
    raleway600SemiBold: {
        flex: 1,
        fontSize: 20,
        fontFamily: 'Raleway_600SemiBold',
        includeFontPadding: false,
    },
    raleway500Medium: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'Raleway_500Medium',

        includeFontPadding: false,
    },
    raleway400Regular: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Raleway_400Regular',
        includeFontPadding: false,
    },
});

export default {
    RegularText: Montserrat400RegularText,
    ProductRatingCardText: Montserrat300LightText,
    BigButtonText: Montserrat600SemiBoldText,
    CategoryCardNameText: Raleway400RegularText,
    ScreenHeaderTitleText: Raleway500MediumText,
    ScreenSectionTitleText: Raleway600SemiBoldText,
    ProductPageNameText: Raleway700BoldText,
}