import { Router } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import svgIcons from "@/assets/icons/svgIcons";
import { commonStyles } from "../styles/styles";

interface ScreenHeaderProps {
    title: string,
    router: Router,
}


const ScreenHeaderComponent: React.FC<ScreenHeaderProps> = (props) => {
    function handlePressBackButton() {
        if (props.router.canGoBack()) {
            props.router.back();
        }
    }

    return (
        <View>
            <Pressable style={{ minHeight: 28, width: '100%', gap: 14, flexDirection: 'row', alignItems: 'center' }} onPress={handlePressBackButton}>
                <svgIcons.BackArrowIcon rotation={180}></svgIcons.BackArrowIcon>
                <Text style={{
                    fontSize: 20,
                    fontFamily: commonStyles.text.fontFamily,
                    color: 'black'
                }}>{props?.title[0]?.toLocaleUpperCase() + props?.title?.slice(1, props.title.length)?.toLocaleLowerCase()}</Text>
            </Pressable>
        </View >
    )
}


export default ScreenHeaderComponent;