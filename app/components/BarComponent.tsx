import React from "react";
import { View, StyleSheet, Text, StyleProp, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import commonStyles from "../styles/commonStyles";
import Icon from 'react-native-vector-icons/FontAwesome'

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

const BarComponent: React.FC<BarComponentProps> = ({ text, textStyle, leftIcon, rightIcon, style }) => {

    if ((leftIcon !== undefined) && (rightIcon !== undefined))
        return (
            <TouchableOpacity style={[styles.container, style]}>
                <View style={styles.leftIconContainer}>
                    {leftIcon}
                </View>

                <View style={styles.textContainer}>
                    <Text style={[styles.text, textStyle]}>
                        {text}
                    </Text>
                </View>

                <View style={styles.rightIconContainer}>
                    {rightIcon}
                </View>
            </TouchableOpacity>
        )
    else {
        return (
            <TouchableOpacity style={[styles.container, style]}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, textStyle]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        height: commonStyles.bar.height,
        
        borderWidth: commonStyles.bar.borderWidth,
        borderRadius: commonStyles.bar.borderRadius,

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
        padding: commonStyles.barText.padding,
        fontSize: commonStyles.barText.fontSize,
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
        marginRight: commonStyles.bar.margin,
    },
})



export default BarComponent;