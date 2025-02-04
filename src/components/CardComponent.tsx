import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Router } from "expo-router";
import { colorsStyles } from "@/src/styles/styles";
import { Category } from "@/src/interfaces/Category";
import { Raleway400RegularText } from "./Text/TextComponents";

interface CardProps<T> {
    item: T,
    style: ViewStyle,
    imageStyle?: ImageStyle,
    imageUri?: string,
    router: Router,
    titleText?: string,
    textStyle?: TextStyle
}

function navigateToCategory(item: Category, router: Router) {
    router.push({
        pathname: '/(main)/(tabs)/catalog/categories/[categoryId]',
        params: {
            categoryId: item.id,

            categoryDepth: item.depth,
        },
    })
}


function navigate<T>(item: T, router: Router) {
    if (isCategory(item)) {
        navigateToCategory(item, router);
    }

}

function isCategory(item: any): item is Category {
    return item && typeof item.id === 'string' && typeof item.depth === 'number';
}

function CardComponent<T>(props: CardProps<T>) {
    return (
        <View style={[cardStyles.container, props.style]}>
            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { navigate(props.item, props.router) }}>
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

export default React.memo(CardComponent);