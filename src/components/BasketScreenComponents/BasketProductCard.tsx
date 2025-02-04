import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Product } from "@/src/interfaces/Product";
import { Router, useNavigation } from "expo-router";
import { dimensionsStyles, colorsStyles } from "@/src/styles/styles";
import { BasketButtonComponent, FavouriteButtonComponent } from "../Buttons/ButtonComponents";
import { Montserrat500MediumText, Montserrat400RegularText } from "../Text/TextComponents";
import ProductCard from "../ProductCard";

interface BasketProductCardProps {
    data: Product,
    router: Router,
    navigateToProduct: (product: Product) => void,
}

const BasketProductCard: React.FC<BasketProductCardProps> = (props: BasketProductCardProps) => {
    const router = props.router;
    const [product, setProduct] = useState<Product>(props.data);

    return (
        <ProductCard
            data={props.data}
            router={props.router}
            navigateToProduct={props.navigateToProduct}
            parentTab="basket"
        />
    )
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
})

export default React.memo(BasketProductCard);

