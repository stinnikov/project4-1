import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground, Pressable } from "react-native";
import ProductDescription from "./temp/productDescription";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import { BasketButtonComponent, BackButtonComponent, FavouriteButtonComponent } from "./Buttons/ButtonComponents";

interface ProductCardProps {
    product: Product,
    router: Router,
}

const ProductPageComponent: React.FC<ProductCardProps> = (props) => {
    const product = props.product;
    const router = props.router;
    console.log(product);

    const DATA: ProductCardProps[] = [
        props,
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topButtons}>
                <BackButtonComponent router={router} style={{ marginLeft: 16 }} />

                <FavouriteButtonComponent product={product} style={{ marginRight: 16 }} />
            </View>

            <ScrollView overScrollMode="never" contentContainerStyle={styles.card}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={{ uri: product.imageUrl }}
                            style={styles.imageBackground}
                            resizeMode='contain'
                        >
                        </ImageBackground>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{product.name}</Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.priceText}>{product.price}</Text>

                        <BasketButtonComponent product={props.product} style={{ flex: 1, height: '80%', justifyContent: 'center' }} size='medium' />
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


export default ProductPageComponent;