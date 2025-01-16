import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text, Button } from "react-native";
import { Product } from "../interfaces/Product";
import { Router } from "expo-router";
import commonStyles from "../styles/commonStyles";
import svgIcons from "@/assets/icons/svgIcons";

interface ProductListCardProps{
    data: Product,
    router: Router,
}

function navigateToProduct(item: Product, router: Router)
{
    router.push(
        {
            pathname: '/(main)/(tabs)/(Catalog)/products/product/[productId]',
            params: {
                productId: item.id,
            }
        }
    )
}

const ProductListCardComponent: React.FC<ProductListCardProps> = (props: ProductListCardProps) => {
    return(
        <View style={[cardStyles.container]}>
            <TouchableOpacity onPress={() => {navigateToProduct(props.data, props.router)}}>
                <ImageBackground style={cardStyles.imageBackground} imageStyle={cardStyles.image} source={{uri: props.data.imageUrl}}></ImageBackground>
                <Text style={cardStyles.text}>{props.data.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={cardStyles.bottomButtonBlock}>
                <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                <Text style={{color: commonStyles.basketButtonText.color}}>В корзину</Text>
            </TouchableOpacity>
        </View>
    )
} 

const cardStyles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:12,
        justifyContent:'space-between',
        backgroundColor: 'white',
    },
    imageTitleBlock:{
        height:commonStyles.productsCardImageBackground.height, 
        width:commonStyles.productsCardImageBackground.width
    },
    text:{
        padding: commonStyles.cardTitle.padding,
        fontSize: commonStyles.productListCard.fontSize,
        fontWeight: commonStyles.productListCard.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        color:commonStyles.cardTitle.color,
        alignSelf:'flex-start',
    },
    imageBackground:{
        width: '100%', 
        height: commonStyles.productsCardImageBackground.height
    },
    image:{
        borderTopLeftRadius: commonStyles.image.borderRadius,
        borderTopRightRadius:commonStyles.image.borderRadius,
        resizeMode:'contain',
    },
    bottomButtonBlock: {
        flexDirection: 'row',
        minHeight:28,
        borderRadius: 12,
        margin: 8,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        backgroundColor: commonStyles.basketButton.color,
    }
})

export default ProductListCardComponent;