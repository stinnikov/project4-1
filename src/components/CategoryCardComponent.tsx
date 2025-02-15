import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import { Category } from "@/src/interfaces/Category";
import { Raleway400RegularText } from "./Text/TextComponents";
import useNavigationStore from "../store/navigationStore";

interface CardProps {
    category: Category,
    style: ViewStyle,
    imageStyle?: ImageStyle,
    imageUri?: string,
    titleText?: string,
    textStyle?: TextStyle
}

function CategoryCardComponent<T>(props: CardProps) {
    const { navigateToCategoryListScreen } = useNavigationStore();
    return (
        <View style={[cardStyles.container, props.style]}>
            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { navigateToCategoryListScreen(props.category) }}>
                <ImageBackground
                    source={{ uri: props.imageUri }}
                    style={cardStyles.imageBackground}
                    imageStyle={[cardStyles.image]}>
                    <Raleway400RegularText
                        style={{ paddingTop: 8, paddingLeft: 16 }}
                        text={props.titleText}
                    />
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: colorsStyles.mainGreyColor.color,
        borderRadius: 12,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        resizeMode: 'cover',
    }
})

export default React.memo(CategoryCardComponent);