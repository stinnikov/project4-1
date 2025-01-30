import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from "react-native";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import styles, { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import { getSingleProductByIdAsync } from '@/src/services/ProductService';
import LoadingScreen from "@/src/screens/LoadingScreen";
import { BasketButtonComponent } from "./Buttons/ButtonComponents";

interface TopGoodsCardProps {
    data: Product,
    router: Router,
    isMainScreen?: boolean,
}

const TopGoodsCardComponent: React.FC<TopGoodsCardProps> = (props) => {
    function navigateToProduct() {
        if (props.isMainScreen == false) {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/catalog/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
        else {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(home)/product/[productId]',
                    params: {
                        productId: props.data.id,
                    }
                }
            )
        }
    }

    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getEntries = async () => {
            try {

                if (typeof (props.data.id) == "string") {
                    var getProductResponse = await getSingleProductByIdAsync(props.data.id)
                    if (getProductResponse) {
                        setProduct(getProductResponse);
                    }
                }
            }
            finally {
                setLoading(false);
            }
        }
        getEntries();
    }, [])

    if (loading) {
        return <LoadingScreen />
    }

    if (product)
        return (
            <View style={[cardStyles.container]}>
                <View style={cardStyles.content}>
                    <View style={cardStyles.imageTitleBlock}>
                        <TouchableOpacity
                            onPress={navigateToProduct}>
                            <ImageBackground
                                source={{ uri: product.imageUrl }}
                                style={[cardStyles.imageBackground]}
                                imageStyle={[cardStyles.image]}>
                            </ImageBackground>
                            <Text style={cardStyles.title}>{product.name}</Text>
                        </TouchableOpacity>
                    </View>

                    <BasketButtonComponent product={props.data} />
                </View>
            </View>
        )
}

const cardStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        margin: 16,
        borderRadius: 12,
        justifyContent: 'space-between',
        backgroundColor: colorsStyles.mainWhiteColor.color,
        elevation: 5,
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 6 },
        marginLeft: 16,
        marginRight: -4,
    },
    imageTitleBlock: {
        height: dimensionsStyles.topGoodsCard.height,
        width: dimensionsStyles.topGoodsCard.width
    },

    title: {
        padding: textStyles.cardTitle.padding,
        fontSize: 14,
        fontWeight: 'semibold',
        fontFamily: commonStyles.text.fontFamily,
        color: commonStyles.text.color,
        alignSelf: 'flex-start',
    },
    imageBackground: {
        width: dimensionsStyles.topGoodsImageBackground.width,
        height: dimensionsStyles.topGoodsImageBackground.height,
        overflow: 'hidden',
    },
    image: {
        borderTopLeftRadius: commonStyles.general.borderRadius,
        borderTopRightRadius: commonStyles.general.borderRadius,
        resizeMode: 'contain',
    },
})

export default TopGoodsCardComponent;

