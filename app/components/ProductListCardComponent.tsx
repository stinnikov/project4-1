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
    const currentTab = navigation.getParent()?.getState();

    function navigateToProduct() {
        switch (currentTab?.index) {
            case 0: {
                props.router.push(
                    {
                        pathname: '/(main)/(tabs)/(catalog)/product/[productId]',
                        params: {
                            productId: props.data.id,
                        }
                    }
                )
            }
            case 1: {
                props.router.push(
                    {
                        pathname: '/(main)/(tabs)/(favourites)/product/[productId]',
                        params: {
                            productId: props.data.id,
                        }
                    }
                )
            }
            case 2: {
                props.router.push(
                    {
                        pathname: '/(main)/(tabs)/(home)/product/[productId]',
                        params: {
                            productId: props.data.id,
                        }
                    }
                )
            }
            case 3: {
                props.router.push(
                    {
                        pathname: '/(main)/(tabs)/(profile)/product/[productId]',
                        params: {
                            productId: props.data.id,
                        }
                    }
                )
            }
            case 4: {
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
    }



    return (
        <View style={[cardStyles.container]}>
            <TouchableOpacity onPress={navigateToProduct}>
                <ImageBackground style={cardStyles.imageBackground} imageStyle={cardStyles.image} source={{ uri: props.data.imageUrl }}></ImageBackground>
                <Text style={cardStyles.text}>{props.data.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={cardStyles.bottomButtonBlock} onPress={() => { addFavoriteProduct(props.data.id) }}>
                <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                <Text style={textStyles.basketButtonMiniText}>В корзину</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', borderRadius: 12 }}
                onPress={() => { getFavouritesProducts() }}>
                <Text>TEST</Text>
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
        backgroundColor: colorsStyles.mainBrightColor.color,
    }
})

export default ProductListCardComponent;