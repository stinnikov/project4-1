import { Router } from "expo-router";
import React from "react";
import { View, Pressable, ViewStyle } from "react-native";
import svgIcons from "@/src/assets/icons/svgIcons";
import { ScreenHeaderTitleText } from "./Text/TextComponents";

interface ScreenHeaderProps {
    title: string,
    router: Router,
    style?: ViewStyle
}


const ScreenHeaderComponent: React.FC<ScreenHeaderProps> = (props) => {
    function handlePressBackButton() {
        if (props.router.canGoBack()) {
            props.router.back();
        }
    }

    return (
        <View>
            <Pressable style={[{ minHeight: 28, width: '100%', gap: 14, flexDirection: 'row', alignItems: 'center' }, props.style]} onPress={handlePressBackButton}>
                <svgIcons.BackArrowIcon rotation={180}></svgIcons.BackArrowIcon>
                <ScreenHeaderTitleText
                    text={props.title}
                />
            </Pressable>
        </View >
    )
}


export default ScreenHeaderComponent;