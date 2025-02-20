import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground, RefreshControl } from "react-native";
import ProductDescription from "../temp/productDescription";
import { Product } from "@/src/interfaces/Product";
import { dimensionsStyles, colorsStyles } from "@/src/styles/styles";
import BackButtonComponent from "../Buttons/BackButton";
import FavouriteButton from "../Buttons/FavouriteButton";
import BasketButtonComponent from "../Buttons/BasketButtonComponent";
import { Montserrat600SemiBoldText, Raleway700BoldText } from "../Text/TextComponents";
import Constants from "expo-constants";

interface ProductPageProps {
    product: Product,
    onRefresh: () => void;
    refreshing: boolean;
}

const ProductPage: React.FC<ProductPageProps> = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topButtons}>
                <BackButtonComponent style={{ marginLeft: 16 }} />

                <FavouriteButton product={props.product} style={{ marginRight: 16 }} />
            </View>

            <ScrollView
                overScrollMode="never"
                contentContainerStyle={styles.card}
                refreshControl={
                    <RefreshControl
                        tintColor={colorsStyles.mainBrightColor.color}
                        colors={[colorsStyles.mainBrightColor.color]}
                        refreshing={props.refreshing}
                        onRefresh={props.onRefresh}
                    />
                }
            >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={{ uri: props.product.imageUrl }}
                            style={styles.imageBackground}
                            resizeMode='contain'
                        >
                        </ImageBackground>
                    </View>
                    <View style={styles.productNameContainer}>
                        <Raleway700BoldText
                            text={props.product.name}
                            style={{ fontSize: 26 }}
                        />
                    </View>

                    <View style={styles.priceContainer}>
                        <Montserrat600SemiBoldText
                            style={{ paddingHorizontal: 6, paddingVertical: 4, fontSize: 26 }}
                            text={props.product.price}
                        />
                    </View>
                </View>

                <View style={styles.description}>
                    <ProductDescription></ProductDescription>
                </View>
            </ScrollView>

            <View style={{ minHeight: '7%', position: 'absolute', width: '93%', alignSelf: 'center', bottom: 0, marginBottom: 8 }}>
                <BasketButtonComponent
                    product={props.product}
                    style={styles.bottomButton}
                />
            </View>
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
        marginTop: Constants.statusBarHeight,
        borderColor: colorsStyles.mainGreyColor.color,
    },
    topButtons: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        zIndex: 999,
        minHeight: 50,
        marginTop: Constants.statusBarHeight,
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
    productNameContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
        minHeight: 100,
    },
    priceContainer:
    {
        flex: 1,
        marginVertical: 12,
        alignSelf: 'flex-start',
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        borderRadius: 6,
        marginLeft: 10,
    },
    description:
    {
        paddingBottom: '14%',
    },
    bottomButton: {
        paddingVertical: 12,
    }

});


export default ProductPage;