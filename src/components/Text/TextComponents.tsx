import { colorsStyles } from "@/src/styles/styles";
import React, { ReactElement } from "react";
import { View, StyleSheet, Text, TextStyle } from "react-native";


interface TextProps {
    style?: TextStyle | TextStyle[],
    text: string | undefined,
}
export const RegularText: React.FC<TextProps> = (props) => {
    return (
        <Text style={[styles.regularText, props.style]}>
            {props.text ?? ''}
        </Text>
    );
};

export const SmallRegularText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text numberOfLines={4} style={[styles.smallRegularText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const MiniRegularText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.miniRegularText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const ScreenHeaderTitleText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.screenHeaderTitleText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const CategoryCardNameText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.categoryCardName, style]}>
            {text ?? ''}
        </Text>
    );
};

export const ScreenSectionTitleText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.screenSectionTitle, style]}>
            {text ?? ''}
        </Text>
    );
};

export const ProductRatingCardText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.ratingCardText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const BigButtonText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text style={[styles.bigButtonText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const ProductPageNameText: React.FC<TextProps> = ({ text, style }) => {
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

export const CirclePostForUserText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text numberOfLines={3} style={[styles.circlePostForUserText, style]}>
            {text ?? ''}
        </Text>
    );
};

export const SortListText: React.FC<TextProps> = ({ text, style }) => {
    return (
        <Text numberOfLines={3} style={[styles.sortListText, style]}>
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
    miniRegularText: {
        fontSize: 10,
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
    circlePostForUserText: {
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular',
        alignSelf: 'center',
        textAlign: 'center',
        letterSpacing: -0.03,
    },
    ratingCardText: {
        fontSize: 12,
        fontFamily: 'Montserrat_500Medium',
        letterSpacing: -0.03,
    },
    sortListText: {
        fontSize: 18,
        fontFamily: 'Montserrat_600SemiBold',
        color: colorsStyles.mainBrightColor.color,
        letterSpacing: -0.03,
    }

});

export default {
    BigButtonText,
    RegularText,
    SmallRegularText,
    MiniRegularText,
    ScreenHeaderTitleText,
    ScreenSectionTitleText,
    ProductRatingCardText,
    CategoryCardNameText,
    ProductPageNameText,
    CirclePostForUserText,
    SortListText
}