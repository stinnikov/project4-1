import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, ViewStyle } from "react-native";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import { dimensionsStyles, colorsStyles, buttonStyles, shadowStyles } from "@/src/styles/styles";
import { FavouriteButtonComponent } from "./Buttons/ButtonComponents";
import { Montserrat400RegularText, Montserrat300LightText, Montserrat500MediumText } from "./Text/TextComponents";
import useNavigationStore from "../store/navigationStore";
import BasketButtonComponent from "./Buttons/AddToBasketButton";

interface ProductCardProps {
    product: Product;
    style?: ViewStyle;
    parentTab: 'basket' | 'home' | 'profile' | 'catalog' | 'favourites';
}



const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
    const navigateToProductPageScreen = useNavigationStore(({ navigateToProductPageScreen }) => navigateToProductPageScreen)

    return (
        <View style={[styles.container, props.style, shadowStyles.regularShadow]}>
            <TouchableOpacity style={styles.productImageContainer} onPress={() => { navigateToProductPageScreen(props.product, props.parentTab) }}>
                <ImageBackground style={styles.productImage} source={{ uri: props.product.imageUrl }} resizeMode="contain">
                    <View style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginTop: 12, marginRight: 8 }}>
                        <View style={[buttonStyles.miniButton]}>
                            <Montserrat300LightText
                                style={{ fontSize: 16, marginBottom: 3, color: '#000' }}
                                text="4.3"
                            />
                        </View>
                        <FavouriteButtonComponent product={props.product} style={{ alignSelf: 'flex-end' }} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.productNameContainer}>
                <Montserrat400RegularText
                    style={{ fontSize: 14 }}
                    text={props.product.name}
                />
            </View>

            <View style={styles.priceContainer}>
                <Montserrat500MediumText
                    style={{ paddingHorizontal: 8, fontSize: 14 }}
                    text={props.product.price}
                />
            </View>

            <View style={styles.bottomContainer}>
                <BasketButtonComponent
                    textStyle={{ color: colorsStyles.mainWhiteColor.color, fontSize: 14 }}
                    style={{ marginHorizontal: 12, paddingVertical: 8, paddingHorizontal: 12 }}
                    product={props.product}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: dimensionsStyles.productListCard.height,
        width: dimensionsStyles.productListCard.width,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderRadius: 12,
        zIndex: 999
    },

    productImageContainer: {
        flex: 2,
        width: '100%',
        height: '100%',
    },

    productImage: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },

    productNameContainer: {
        flex: 1,
        marginLeft: 10,
    },

    priceContainer: {
        flex: 0.3,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        borderRadius: 6,
        marginLeft: 10,
    },

    bottomContainer: {
        justifyContent: 'center',
        marginVertical: 12,
    }
})

export default React.memo(ProductCard);

