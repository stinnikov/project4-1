import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Button } from "react-native";
import { Product } from "../interfaces/Product";
import { Router, useNavigation } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "../styles/styles";
import svgIcons from "@/assets/icons/svgIcons";
import { addFavoriteProduct, getFavouritesProducts } from "../services/ProductService";

interface ProductListCardProps {
    data: Product,
    router: Router,
}

const ProductListCardComponent: React.FC<ProductListCardProps> = (props: ProductListCardProps) => {
    const navigation = useNavigation();
    const currentTabIndex = navigation.getParent()?.getState().index;

    function navigateToProduct() {
        if (currentTabIndex === 0) {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(catalog)/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 1) {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(favourites)/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 2) {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(home)/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 3) {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(profile)/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 4) {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(basket)/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
    }



    return (
        <View style={[styles.container]}>
            {/* <svgIcons.FavoritesIcon style={{ position: 'absolute' }}></svgIcons.FavoritesIcon> */}
            <TouchableOpacity onPress={navigateToProduct}>
                <ImageBackground style={styles.productImageBackground} imageStyle={styles.productImage} source={{ uri: props.data.imageUrl }}></ImageBackground>
                <Text style={styles.productNameText}>{props.data.name}</Text>
            </TouchableOpacity>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{props.data.price}</Text>
            </View>

            <TouchableOpacity style={styles.bottomButtonContainer}>
                <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                <Text style={textStyles.basketButtonMiniText}>В корзину</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    imageTitleBlock: {
        height: dimensionsStyles.productsCardImageBackground.height,
        width: dimensionsStyles.productsCardImageBackground.width
    },
    productNameText: {
        padding: textStyles.cardTitle.padding,
        fontSize: textStyles.productListCardText.fontSize,
        fontWeight: textStyles.productListCardText.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        color: textStyles.cardTitle.color,
        alignSelf: 'flex-start',
    },
    priceContainer: {
        paddingHorizontal: 16,
    },
    priceText: {
        fontFamily: commonStyles.text.fontFamily,
    },
    productImageBackground: {
        alignSelf: 'center',
        width: dimensionsStyles.productsCardImageBackground.width,
        height: dimensionsStyles.productsCardImageBackground.height
    },
    productImage: {
        borderTopLeftRadius: commonStyles.general.borderRadius,
        borderTopRightRadius: commonStyles.general.borderRadius,
        resizeMode: 'contain',
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        minHeight: 28,
        borderRadius: 12,
        margin: 8,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        backgroundColor: colorsStyles.mainBrightColor.color,
    }
})

export default ProductListCardComponent;