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
    },
    montserrat500Medium: {
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
    },
    montserrat400Regular: {
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
    },
    montserrat300Light: {
        fontSize: 16,
        fontFamily: 'Montserrat_300Light',
    },

    //-- RALEWAY ---
    raleway700Bold: {
        fontSize: 16,
        fontFamily: 'Raleway_700Bold',
    },
    raleway600SemiBold: {
        fontSize: 16,
        fontFamily: 'Raleway_600SemiBold',
    },
    raleway500Medium: {
        fontSize: 16,
        fontFamily: 'Raleway_500Medium',
    },
    raleway400Regular: {
        fontSize: 16,
        fontFamily: 'Raleway_400Regular',
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