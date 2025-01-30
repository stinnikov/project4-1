import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Button } from "react-native";
import { Product } from "@/src/interfaces/Product";
import { Router, useNavigation } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles, buttonStyles } from "@/src/styles/styles";
import { AddOneProductInBasket, BasketButtonComponent, FavouriteButtonComponent, RemoveOneProductFromBasket } from "../Buttons/ButtonComponents";

interface BasketProductCardProps {
    data: Product,
    router: Router,
}

const BasketProductCardComponent: React.FC<BasketProductCardProps> = (props: BasketProductCardProps) => {
    const router = props.router;
    const [product, setProduct] = useState<Product>(props.data);
    const [amountInBasket, setAmountInBasket] = useState<number>(product.amountInBasket);

    function addOneProduct() {
        setAmountInBasket(product.amountInBasket + 1);
        product.amountInBasket++;
    }

    function removeOneProduct() {
        if (product.amountInBasket - 1 >= 0) {
            setAmountInBasket(product.amountInBasket - 1);
            product.amountInBasket--;
        }
    }

    const navigation = useNavigation();
    const currentTabIndex = navigation.getParent()?.getState().index;

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
        <View style={styles.container}>
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
                <View style={[buttonStyles.miniButton, { alignSelf: 'center' }]}>
                    <Text>{amountInBasket}</Text>
                </View>

            </View>

            <View style={styles.addRemoveButtons}>
                <RemoveOneProductFromBasket product={product} onRemove={removeOneProduct} style={{ flex: 1, alignItems: 'center', width: '100%', height: '100%', borderRightWidth: 1, }} />
                <AddOneProductInBasket product={product} onAdd={addOneProduct} style={{ flex: 1, alignItems: 'center', width: '100%', height: '100%', borderLeftWidth: 1 }} />
            </View>
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
        minHeight: 30,
        padding: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },

    productNameText: {
        fontSize: textStyles.productListCardText.fontSize,
        fontWeight: textStyles.productListCardText.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        color: textStyles.cardTitle.color,
        alignSelf: 'flex-start',
    },

    productPriceText: {
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: commonStyles.text.fontFamily,
    },

    addRemoveButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderTopWidth: 1,
        flex: 0.3
    }
})

export default React.memo(BasketProductCardComponent);

