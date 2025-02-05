import { colorsStyles } from "@/src/styles/styles";
import React, { ReactElement } from "react";
import { View, StyleSheet, Text, TextStyle } from "react-native";


interface TextProps {
    style?: TextStyle | TextStyle[],
    text: string | undefined,
}
export const Montserrat400RegularText: React.FC<TextProps> = (props) => {
    return (
        <Text numberOfLines={4} style={[styles.regularText, props.style]}>
            {props.text ?? ''}
        </Text>
    );
};

export const Raleway500MediumText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.screenHeaderTitleText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway400RegularText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.categoryCardName, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway600SemiBoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.screenSectionTitle, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Montserrat500MediumText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.ratingCardText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Montserrat600SemiBoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.bigButtonText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const Raleway700BoldText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.productPageNameText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const ProductPagePriceText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.productPagePriceText, style]}>
            {text ?? ''}
        </Text>
    );
};


const styles = StyleSheet.create({
    bigButtonText: {
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold',
        letterSpacing: -0.03,
    },
    regularText: {
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: -0.03,
    },
    screenHeaderTitleText: {
        fontSize: 20,
        fontFamily: 'Raleway_500Medium',
    },
    categoryCardName: {
        fontSize: 16,
        fontFamily: 'Raleway_400Regular',
        letterSpacing: -0.03,
    },
    screenSectionTitle: {
        fontSize: 20,
        fontFamily: 'Raleway_600SemiBold',
    },
    smallRegularText: {
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: -0.03,
    },
    productPageNameText: {
        fontSize: 26,
        fontFamily: 'Raleway_700Bold',
    },
    productPagePriceText: {
        fontSize: 26,
        fontFamily: 'Montserrat_500Medium',
    },
    ratingCardText: {
        fontSize: 12,
        fontFamily: 'Montserrat_500Medium',
        letterSpacing: -0.03,
    },

});

export default {
    RegularText: Montserrat400RegularText,
    ProductRatingCardText: Montserrat500MediumText,
    BigButtonText: Montserrat600SemiBoldText,



    CategoryCardNameText: Raleway400RegularText,
    ScreenHeaderTitleText: Raleway500MediumText,
    ScreenSectionTitleText: Raleway600SemiBoldText,
    ProductPageNameText: Raleway700BoldText,
}