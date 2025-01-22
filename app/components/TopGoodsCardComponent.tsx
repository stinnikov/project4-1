import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from "react-native";
import { Product } from "../interfaces/Product";
import { Router } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "../styles/styles";
import svgIcons from "@/assets/icons/svgIcons";
import { getSingleProductById } from '@/app/services/ProductService';
import LoadingScreen from "../screens/LoadingScreen";

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
                    pathname: '/(main)/(tabs)/(catalog)/product/[productId]',
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
                    var getProductResponse = await getSingleProductById(props.data.id)
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
                <TouchableOpacity style={cardStyles.bottomButtonBlock}>
                    <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                    <Text style={textStyles.basketButtonMiniText}>В корзину</Text>
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
    bottomButtonBlock: {
        flexDirection: 'row',
        minHeight: 28,
        borderRadius: 12,
        margin: 8,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        backgroundColor: colorsStyles.basketButtonColor.color,
    }
})

export default TopGoodsCardComponent;

