import { Router } from "expo-router";
import React from "react";
import { View, Pressable, ViewStyle, StyleSheet, ColorValue } from "react-native";
import svgIcons from "@/src/assets/icons/svgIcons";
import { Raleway500MediumText } from "./Text/TextComponents";
import useNavigationStore from "../store/navigationStore";

interface ScreenHeaderProps {
    title: string,
    style?: ViewStyle,
    color?: ColorValue,
}


const ScreenHeader: React.FC<ScreenHeaderProps> = (props) => {
    const { navigateBack } = useNavigationStore();

    return (
        <Pressable style={styles.container} onPress={navigateBack}>
            <svgIcons.BackArrowIcon stroke={props.color} rotation={180}></svgIcons.BackArrowIcon>
            <Raleway500MediumText
                text={props.title}
                style={{ color: props.color }}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        margin: 16,
    }
})


export default ScreenHeader;