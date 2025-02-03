import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, ViewStyle } from "react-native";
import { Product } from "@/src/interfaces/Product";
import { Router, useNavigation } from "expo-router";
import { dimensionsStyles, colorsStyles, buttonStyles } from "@/src/styles/styles";
import { BasketButtonComponent, FavouriteButtonComponent } from "./Buttons/ButtonComponents";
import { ProductRatingCardText, SmallRegularText } from "./Text/TextComponents";

interface ProductCardProps {
    data: Product,
    router: Router,
    style?: ViewStyle,
    parentTab: 'catalog' | 'favourites' | 'home' | 'profile' | 'basket'
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
    const router = props.router;
    const [product, setProduct] = useState<Product>(props.data);

    function navigateToProduct() {
        if (props.parentTab === 'catalog') {
            router.push(
                {
                    pathname: '/(main)/(tabs)/catalog/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'favourites') {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(favourites)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'home') {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(home)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'profile') {
            router.push(
                {
                    pathname: '/(main)/(tabs)/(profile)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'basket') {
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
                            <ProductRatingCardText
                                style={{ fontSize: 16, marginBottom: 3, color: '#000' }}
                                text="4.3"
                            />
                        </View>
                        <FavouriteButtonComponent product={product} style={{ alignSelf: 'flex-end' }} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.productNameContainer}>
                <SmallRegularText
                    text={product.name}
                />
            </View>

            <View style={styles.priceContainer}>
                <SmallRegularText
                    style={{ paddingHorizontal: 8 }}
                    text={product.price}
                />
            </View>

            <View style={{ justifyContent: 'center', flex: 0.4, marginVertical: 12, }}>
                <BasketButtonComponent
                    style={{ bottom: 0, marginHorizontal: 10 }}
                    product={product} />
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
        marginLeft: 10,
    },

    priceContainer: {
        flex: 0.3,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#e2e2e2',
        borderRadius: 6,
        marginLeft: 10,
    },

    bottomContainer: {
        height: '8%',
        padding: 8,
        width: '100%',
        borderRadius: 14
    }
})

export default React.memo(ProductCard);

