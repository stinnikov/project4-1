import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, StyleProp, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { Router } from "expo-router";
import { commonStyles, colorsStyles, textStyles } from "../styles/styles";
import { Category } from "../interfaces/Category";

interface CardComponentProps<T> {
    item: T,
    style: StyleProp<ViewStyle>,
    imageStyle?: StyleProp<ImageStyle>,
    imageUri?: string,
    router: Router,
    titleText?: string,
    textStyle?: StyleProp<TextStyle>
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

function CardComponent<T>(props: CardComponentProps<T>) {
    return (
        <View style={[cardStyles.container, props.style]}>
            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { navigate(props.item, props.router) }}>
                <ImageBackground
                    source={{ uri: props.imageUri }}
                    style={cardStyles.imageBackground}
                    imageStyle={[cardStyles.image]}>

                    <Text style={[cardStyles.title]}>{props.titleText}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        padding: textStyles.cardTitle.padding,
        fontSize: textStyles.cardTitle.fontSize,
        fontWeight: textStyles.cardTitle.fontWeight,
        color: 'black',
        alignSelf: 'flex-start',
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
        borderRadius: commonStyles.general.borderRadius,
        resizeMode: 'cover',
    }
})

export default React.memo(CardComponent);