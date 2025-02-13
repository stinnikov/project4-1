import { Router } from "expo-router";
import React from "react";
import { View, Pressable, ViewStyle, StyleSheet } from "react-native";
import svgIcons from "@/src/assets/icons/svgIcons";
import { Raleway500MediumText } from "./Text/TextComponents";
import useNavigationStore from "../store/navigationStore";

interface ScreenHeaderProps {
    title: string,
    style?: ViewStyle
}


const ScreenHeader: React.FC<ScreenHeaderProps> = (props) => {
    const { navigateBack } = useNavigationStore();

    return (
        <View style={[styles.container, props.style]}>
            <Pressable style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={navigateBack}>
                <svgIcons.BackArrowIcon rotation={180}></svgIcons.BackArrowIcon>
                <Raleway500MediumText
                    text={props.title}
                />
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default ScreenHeader;