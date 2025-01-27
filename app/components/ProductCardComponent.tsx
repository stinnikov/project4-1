import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground, Pressable } from "react-native";
import ProductDescription from "./temp/productDescription";
import { Product } from "../interfaces/Product";
import { Router } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "../styles/styles";
import svgIcons from "@/assets/icons/svgIcons";

interface ProductCardProps {
    product: Product,
    router: Router,
}

const ProductCardComponent: React.FC<ProductCardProps> = (props) => {
    function handlePressBackButton() {
        props.router.canGoBack() && props.router.back();
    }
    const DATA: ProductCardProps[] = [
        props,
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topButtons}>
                <Pressable style={[commonStyles.icon, { paddingRight: 2, marginLeft: 16, }]}
                    onPress={handlePressBackButton}>
                    <svgIcons.BackArrowIcon width={20} height={20}></svgIcons.BackArrowIcon>
                </Pressable>

                <TouchableOpacity style={[commonStyles.icon, { marginRight: 16 }]}
                    onPress={function () { }}>
                    <svgIcons.FavoritesIcon width={21} height={21} fill={true && colorsStyles.mainBrightColor.color} stroke={true && colorsStyles.mainBrightColor.color}></svgIcons.FavoritesIcon>
                </TouchableOpacity>
            </View>

            <ScrollView overScrollMode="never" contentContainerStyle={styles.card}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={{ uri: props.product.imageUrl }}
                            style={styles.imageBackground}
                            resizeMode='contain'
                        >
                        </ImageBackground>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{props.product.name}</Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.priceText}>{props.product.price}</Text>

                        <View style={{ flex: 1, height: '100%', direction: 'rtl', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.bottomButtonBlock}>
                                <Text style={textStyles.basketButtonText}>В корзину</Text>
                                <svgIcons.BasketIcon height={20} width={20} stroke={'#FFF'}></svgIcons.BasketIcon>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.description}>
                    <ProductDescription></ProductDescription>
                </View>
            </ScrollView>
        </View>

    )
}



const styles = StyleSheet.create({
    card: {
        backgroundColor: colorsStyles.mainWhiteColor.color,
        flexGrow: 1,
    },
    container: {
        borderBottomWidth: 12,
        borderColor: colorsStyles.mainGreyColor.color,
    },
    topButtons: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        zIndex: 999,
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        height: dimensionsStyles.productCardImage.height,
        width: dimensionsStyles.productCardImage.width
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    title: {
        flex: 1,
        paddingTop: 10,
        minHeight: 100,
    },
    titleText: {
        fontSize: 26,
        margin: 16,
        fontWeight: 'bold',
        fontFamily: commonStyles.text.fontFamily,
    },
    price:
    {
        flex: 1,
        margin: 16,
        alignContent: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
    },
    priceText: {
        fontSize: 26,
        fontFamily: 'Montserrat_500Medium',

    },
    description:
    {
        flex: 5,
    },
    bottomButtonBlock: {
        flexDirection: 'row',
        minHeight: 28,
        borderRadius: 12,
        marginTop: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        backgroundColor: colorsStyles.mainBrightColor.color,
    }

});


export default ProductCardComponent;