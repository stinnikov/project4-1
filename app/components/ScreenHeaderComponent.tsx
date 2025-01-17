import { Router } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import svgIcons from "@/assets/icons/svgIcons";
import commonStyles from "../styles/commonStyles";

interface ScreenHeaderProps {
    title: string,
    router: Router,
}

function back(router: Router) {
    if (router.canGoBack()) {
        router.back();
    }
}
const ScreenHeaderComponent: React.FC<ScreenHeaderProps> = (props) => {
    return (
        <View style={{ minHeight: 28, width: '100%', gap: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Pressable onPress={() => { back(props.router) }}>
                <svgIcons.ArrowRightIcon rotation={180}></svgIcons.ArrowRightIcon>
            </Pressable>
            <Text style={{ 
                fontSize: 20, 
                fontFamily: commonStyles.text.fontFamily, 
                color: 'black' }}>{props?.title[0]?.toLocaleUpperCase() + props?.title?.slice(1,props.title.length)?.toLocaleLowerCase()}</Text>
        </View >
    )
}


export default ScreenHeaderComponent;