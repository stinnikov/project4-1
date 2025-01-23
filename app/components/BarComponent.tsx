import React from "react";
import { View, StyleSheet, Text, StyleProp, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import { commonStyles, dimensionsStyles, colorsStyles } from "../styles/styles";

interface BarComponentProps {
    text?: string,
    textStyle?: StyleProp<TextStyle>,

    leftIcon?: React.JSX.Element,
    leftIconStyle?: StyleProp<TextStyle>,

    rightIcon?: JSX.Element,
    rightIconStyle?: StyleProp<TextStyle>,

    iconSize?: number,
    style?: StyleProp<ViewStyle>


}

const BarComponent: React.FC<BarComponentProps> = (props) => {

    if ((props.leftIcon !== undefined) && (props.rightIcon !== undefined))
        return (
            <TouchableOpacity style={[styles.container, props.style]}>
                <View style={styles.leftIconContainer}>
                    {props.leftIcon}
                </View>

                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.textStyle]}>
                        {props.text}
                    </Text>
                </View>

                <View style={styles.rightIconContainer}>
                    {props.rightIcon}
                </View>
            </TouchableOpacity>
        )
    else {
        return (
            <TouchableOpacity style={[styles.container, props.style]}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.textStyle]}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        height: dimensionsStyles.bar.height,

        borderRadius: commonStyles.general.borderRadius,
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

    text: {
        alignContent: 'center',
        padding: commonStyles.general.padding,
        fontSize: 17,
        fontFamily: commonStyles.text.fontFamily,
        zIndex: 999,
        position: 'absolute',
    },

    rightIconContainer: {
        flex: 0.11,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },

    rightIcon: {
        marginRight: commonStyles.general.margin,
    },
})



export default BarComponent;