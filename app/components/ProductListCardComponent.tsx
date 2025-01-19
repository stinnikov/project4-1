import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Button } from "react-native";
import { Product } from "../interfaces/Product";
import { Router } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "../styles/styles";
import svgIcons from "@/assets/icons/svgIcons";

interface ProductListCardProps {
    data: Product,
    router: Router,
}

function navigateToProduct(item: Product, router: Router) {
    router.push(
        {
            pathname: '/(main)/(tabs)/(Catalog)/products/product/[productId]',
            params: {
                productId: item.id,
            }
        }
    )
}

const ProductListCardComponent: React.FC<ProductListCardProps> = (props: ProductListCardProps) => {
    return (
        <View style={[cardStyles.container]}>
            <TouchableOpacity onPress={() => { navigateToProduct(props.data, props.router) }}>
                <ImageBackground style={cardStyles.imageBackground} imageStyle={cardStyles.image} source={{ uri: props.data.imageUrl }}></ImageBackground>
                <Text style={cardStyles.text}>{props.data.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={cardStyles.bottomButtonBlock}>
                <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                <Text style={{ color: colorsStyles.mainWhiteColor.color }}>В корзину</Text>
            </TouchableOpacity>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    imageTitleBlock: {
        height: dimensionsStyles.productsCardImageBackground.height,
        width: dimensionsStyles.productsCardImageBackground.width
    },
    text: {
        padding: textStyles.cardTitle.padding,
        fontSize: textStyles.productListCardText.fontSize,
        fontWeight: textStyles.productListCardText.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        color: textStyles.cardTitle.color,
        alignSelf: 'flex-start',
    },
    imageBackground: {
        width: dimensionsStyles.productsCardImageBackground.width,
        height: dimensionsStyles.productsCardImageBackground.height
    },
    image: {
        borderTopLeftRadius: commonStyles.general.borderRadius,
        borderTopRightRadius: commonStyles.general.borderRadius,
        resizeMode: 'contain',
    },
    bottomButtonBlock: {
        flexDirection: 'row',
        minHeight: 28,
        borderRadius: 12,
        margin: 8,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    }
})

export default ProductListCardComponent;