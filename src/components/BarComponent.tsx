import React from "react";
import { View, StyleSheet, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { dimensionsStyles, shadowStyles } from "@/src/styles/styles";
import { Montserrat400RegularText } from "./Text/TextComponents";
import { colorsStyles } from "@/src/styles/styles";

interface BarComponentProps {
    text?: string;
    textStyle?: TextStyle;

    leftIcon?: React.JSX.Element;
    leftIconStyle?: TextStyle;

    rightIcon?: JSX.Element;
    rightIconStyle?: TextStyle;

    iconSize?: number;
    style?: ViewStyle;
}

const BarComponent: React.FC<BarComponentProps> = (props) => {
    const { leftIcon, rightIcon, text, textStyle, style } = props;

    return (
        <TouchableOpacity style={[styles.container, style, shadowStyles.regularShadow]}>
            {leftIcon && <View style={styles.leftIconAndTextContainer}>
                {leftIcon}
                <Montserrat400RegularText text={text} style={textStyle} />
            </View>
            }


            {rightIcon && <View style={styles.rightIconContainer}>{rightIcon}</View>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingLeft: 16,
        borderRadius: 12,
        justifyContent: 'space-between',
        gap: 10,
        backgroundColor: colorsStyles.mainWhiteColor.color,

    },

    leftIconAndTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },

    leftIcon: {
    },

    rightIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 12,
    },

    rightIcon: {
        marginRight: 16,
    },
})



export default BarComponent;