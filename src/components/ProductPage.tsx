import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground, RefreshControl, Text } from "react-native";
import ProductDescription from "./temp/productDescription";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import { dimensionsStyles, colorsStyles } from "@/src/styles/styles";
import { BasketButtonComponent, BackButtonComponent, FavouriteButtonComponent } from "./Buttons/ButtonComponents";
import { Montserrat400RegularText, Montserrat600SemiBoldText, Raleway700BoldText } from "./Text/TextComponents";

interface ProductPageProps {
    product: Product,
    router: Router,
    onRefresh: () => void;
    refreshing: boolean;
}

const ProductPage: React.FC<ProductPageProps> = (props) => {
    const [product, setProduct] = useState<Product>(props.product);
    const router = props.router;


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topButtons}>
                <BackButtonComponent router={router} style={{ marginLeft: 16 }} />

                <FavouriteButtonComponent product={product} style={{ marginRight: 16 }} />
            </View>

            <ScrollView
                overScrollMode="never"
                contentContainerStyle={styles.card}
                refreshControl={
                    <RefreshControl tintColor={colorsStyles.mainBrightColor.color} colors={[colorsStyles.mainBrightColor.color]} refreshing={props.refreshing} onRefresh={props.onRefresh}></RefreshControl>
                }
            >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={{ uri: product.imageUrl }}
                            style={styles.imageBackground}
                            resizeMode='contain'
                        >
                        </ImageBackground>
                    </View>
                    <View style={styles.title}>
                        <Raleway700BoldText
                            text={product.name}
                            style={{ fontSize: 26 }}
                        />
                    </View>

                    <View style={styles.priceContainer}>
                        <Montserrat600SemiBoldText
                            style={{ paddingHorizontal: 6, paddingVertical: 4, fontSize: 26 }}
                            text={product.price}
                        />
                    </View>
                </View>

                <View style={styles.description}>
                    <ProductDescription></ProductDescription>
                </View>
            </ScrollView>

            <View style={{ minHeight: '7%', position: 'absolute', width: '93%', alignSelf: 'center', bottom: 0, marginBottom: 8 }}>
                <BasketButtonComponent
                    textStyle={{ fontSize: 20, color: colorsStyles.mainWhiteColor.color }}
                    product={product}
                    style={styles.bottomButton}
                    iconsSize={22}
                    addRemovePanelStyle={styles.bottomButton}
                    size='big'

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
        paddingHorizontal: 16,
        paddingTop: 10,
        minHeight: 100,
    },
    priceContainer:
    {
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