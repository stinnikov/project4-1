import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ViewStyle } from "react-native";
import { Product } from "@/src/interfaces/Product";
import FavouriteButton from "./Buttons/FavouriteButton";
import { dimensionsStyles, colorsStyles, buttonStyles, shadowStyles } from "@/src/styles/styles"; import { Montserrat400RegularText, Montserrat300LightText, Montserrat500MediumText } from "./Text/TextComponents";
import useNavigationStore from "../store/navigationStore";
import BasketButtonComponent from "./Buttons/BasketButtonComponent";

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
                        <FavouriteButton product={props.product} style={{ alignSelf: 'flex-end' }} />
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
                    style={{
                        fontSize: 14,
                        paddingHorizontal: 6,
                    }}
                    text={props.product.price}
                />
            </View>

            <View style={styles.bottomContainer}>
                <BasketButtonComponent
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
    },

    productImageContainer: {
        flex: 3,
        width: '100%',
        height: '100%',
    },

    productImage: {
        width: '100%',
        height: '100%',
    },

    productNameContainer: {
        flex: 1.5,
        marginHorizontal: 12,
    },

    priceContainer: {
        flex: 0.6,
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        alignSelf: 'flex-start',
        borderRadius: 6,
        justifyContent: 'center',
        marginHorizontal: 12
    },

    bottomContainer: {
        //flex: 0,
        margin: 12,
    }
})

export default React.memo(ProductCard);

