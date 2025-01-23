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
        <View style={styles.container}>
            <TouchableOpacity style={styles.productImageContainer} onPress={navigateToProduct}>
                <View style={{ position: 'absolute', zIndex: 999, marginLeft: '72.5%' }}>
                    <View style={styles.icon}>
                        <Text style={{ fontSize: 16, marginBottom: 3, color: '#000' }}>4.3</Text>
                    </View>
                </View>
                <ImageBackground style={styles.productImage} source={{ uri: props.data.imageUrl }} resizeMode="contain"></ImageBackground>
            </TouchableOpacity>

            <View style={{ position: 'absolute', zIndex: 999, marginTop: '60%', marginLeft: '72.5%' }}>
                <View style={styles.icon}>
                    <svgIcons.FavoritesIcon width={21} height={21}></svgIcons.FavoritesIcon>
                </View>
            </View>
            <View style={styles.productNameContainer}>
                <Text style={styles.productNameText}>{props.data.name}</Text>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.productPriceText}>{props.data.price}</Text>
            </View>

            <TouchableOpacity style={styles.basketButtonContiner}>
                <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                <Text style={textStyles.basketButtonMiniText}>В корзину</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: dimensionsStyles.productListCard.height,
        width: dimensionsStyles.productListCard.width,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderRadius: commonStyles.general.borderRadius,
        elevation: 5,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 6 },
    },

    productImageContainer: {
        flex: 2,
        width: '100%',
        height: '100%',
    },

    productImage: {
        width: '100%',
        height: '100%',
    },

    productNameContainer: {
        flex: 1,
        padding: 8,
    },

    priceContainer: {
        flex: 0.3,
        padding: 8,
        width: '100%',
        height: '100%',
    },

    basketButtonContiner: {
        flexDirection: 'row',
        minHeight: 28,
        borderRadius: 12,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorsStyles.mainBrightColor.color,
    },

    productNameText: {
        fontSize: textStyles.productListCardText.fontSize,
        fontWeight: textStyles.productListCardText.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        color: textStyles.cardTitle.color,
        alignSelf: 'flex-start',
    },

    productPriceText: {
        fontSize: 14,
        fontFamily: commonStyles.text.fontFamily,
    },
    icon: {
        margin: 8, // default margin
        height: 30, // чуть больше размера иконки
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 5,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 24,
        shadowOpacity: 0.2,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    }

})

export default React.memo(ProductListCardComponent);

