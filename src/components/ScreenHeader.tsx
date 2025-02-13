import { Router } from "expo-router";
import React from "react";
import { View, Pressable, ViewStyle, StyleSheet } from "react-native";
import svgIcons from "@/src/assets/icons/svgIcons";
import { Montserrat500MediumText, Raleway500MediumText } from "./Text/TextComponents";

interface ScreenHeaderProps {
    title: string,
    router: Router,
    style?: ViewStyle
}


const ScreenHeader: React.FC<ScreenHeaderProps> = (props) => {
    function handlePressBackButton() {
        if (props.router.canGoBack()) {
            props.router.back();
        }
    }

    return (
        <Pressable style={styles.container} onPress={handlePressBackButton}>
            <svgIcons.BackArrowIcon rotation={180}></svgIcons.BackArrowIcon>
            <Raleway500MediumText
                text={props.title}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 16,
    }
})


export default ScreenHeader;