import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Button, ViewStyle } from "react-native";
import { Product } from "@/src/interfaces/Product";
import { Href, Router, useNavigation } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles, buttonStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import { BasketButtonComponent, FavouriteButtonComponent } from "./Buttons/ButtonComponents";
import AddRemoveProductInBasketPanelComponent from "./BasketScreenComponents/AddRemoveProductInBasketPanel";

interface ProductListCardProps {
    data: Product,
    router: Router,
    style?: ViewStyle,
}

const ProductCardComponent: React.FC<ProductListCardProps> = (props: ProductListCardProps) => {
    const router = props.router;
    const [product, setProduct] = useState<Product>(props.data);
    const [amountInBasket, setAmountInBasket] = useState<number>(product.amountInBasket);

    const navigation = useNavigation();
    const currentTabIndex = navigation.getParent()?.getState().index;

    function addOneProduct() {
        setAmountInBasket(prevAmount => prevAmount + 1);
        product.amountInBasket++;
    }

    function removeOneProduct() {
        if (amountInBasket - 1 >= 0) {
            setAmountInBasket(prevAmount => prevAmount - 1);
            product.amountInBasket--;
        }
    }

    function navigateToProduct() {
        if (currentTabIndex === 0) {
            router.push(
                {
                    pathname: '/(main)/(tabs)/catalog/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 1) {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(favourites)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 2) {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(home)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 3) {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(profile)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (currentTabIndex === 4) {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(basket)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
    }

    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity style={styles.productImageContainer} onPress={navigateToProduct}>
                <ImageBackground style={styles.productImage} source={{ uri: product.imageUrl }} resizeMode="contain">
                    <View style={{ alignSelf: 'flex-end', flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginTop: 12, marginRight: 8 }}>
                        <View style={[buttonStyles.miniButton]}>
                            <Text style={{ fontSize: 16, marginBottom: 3, color: '#000' }}>4.3</Text>
                        </View>
                        <FavouriteButtonComponent product={product} style={{ alignSelf: 'flex-end' }} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.productNameContainer}>
                <Text style={styles.productNameText}>{product.name}</Text>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.productPriceText}>{product.price}</Text>
            </View>
            <View style={{ flex: 0.3, marginBottom: 16 }}>
                <BasketButtonComponent style={{ flex: 1, width: '80%', bottom: 0, alignSelf: 'center' }} onAdd={addOneProduct} onRemove={removeOneProduct} product={product} />
            </View>
        </View>
    );
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
        flexDirection: 'column',
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

    bottomContainer: {
        height: '8%',
        padding: 8,
        width: '100%',
        borderRadius: 14
    }
})

export default React.memo(ProductCardComponent);

