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
        <Text style={[styles.montserrat300Light, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway600SemiBoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.raleway600SemiBold, style]}>
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

    //-- MONTSERRAT ---
    montserrat600SemiBold: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        letterSpacing: -0.03,
    },
    montserrat500Medium: {
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
        letterSpacing: -0.03,
    },
    montserrat400Regular: {
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: -0.03,
    },
    montserrat300Light: {
        fontSize: 16,
        fontFamily: 'Montserrat_300Light',
        letterSpacing: -0.03
    },

    //-- RALEWAY ---
    raleway700Bold: {
        fontSize: 16,
        fontFamily: 'Raleway_700Bold',
        letterSpacing: -0.03,
        includeFontPadding: false,
    },
    raleway600SemiBold: {
        fontSize: 16,
        fontFamily: 'Raleway_600SemiBold',
        letterSpacing: -0.03,
        includeFontPadding: false,
    },
    raleway500Medium: {
        fontSize: 16,
        fontFamily: 'Raleway_500Medium',
        letterSpacing: -0.03,
        includeFontPadding: false,
    },
    raleway400Regular: {
        fontSize: 16,
        fontFamily: 'Raleway_400Regular',
        letterSpacing: -0.03,
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