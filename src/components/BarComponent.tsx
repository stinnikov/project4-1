import React from "react";
import { View, StyleSheet, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { dimensionsStyles } from "@/src/styles/styles";
import { RegularText } from "./Text/TextComponents";

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
        <TouchableOpacity style={[styles.container, style]}>
            {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
            <View style={styles.textContainer}>
                <RegularText text={text} style={textStyle} />
            </View>
            {rightIcon && <View style={styles.rightIconContainer}>{rightIcon}</View>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        height: dimensionsStyles.bar.height,

        borderRadius: 12,
    },

    leftIconContainer: {
        flex: 0.11,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    leftIcon: {
    },

    textContainer: {
        flex: 0.78,
        justifyContent: 'center',
    },

    rightIconContainer: {
        flex: 0.11,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },

    rightIcon: {
        marginRight: 16,
    },
})



export default BarComponent;