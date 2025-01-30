import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground, RefreshControl } from "react-native";
import ProductDescription from "./temp/productDescription";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import { commonStyles, dimensionsStyles, colorsStyles, textStyles } from "@/src/styles/styles";
import { BasketButtonComponent, BackButtonComponent, FavouriteButtonComponent } from "./Buttons/ButtonComponents";
import AddRemoveProductInBasketPanelComponent from "./BasketScreenComponents/AddRemoveProductInBasketPanel";

interface ProductCardProps {
    product: Product,
    router: Router,
    onRefresh: () => void;
    refreshing: boolean;
}

const ProductPageComponent: React.FC<ProductCardProps> = (props) => {
    const [product, setProduct] = useState<Product>(props.product);
    const [amountInBasket, setAmountInBasket] = useState<number>(product.amountInBasket);
    const router = props.router;

    function addOneProduct() {
        setAmountInBasket(prevAmount => prevAmount + 1);
        product.amountInBasket++;
    }

    function removeOneProduct() {
        if (amountInBasket - 1 >= 0) {
            setAmountInBasket(prevAmount => prevAmount - 1);
            product.amountInBasket--;
        }
    }

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
                        <Text style={styles.titleText}>{product.name}</Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={styles.priceText}>{product.price}</Text>
                    </View>
                </View>

                <View style={styles.description}>
                    <ProductDescription></ProductDescription>
                </View>
            </ScrollView>
            <View style={{ minHeight: '7%', position: 'absolute', alignSelf: 'center', bottom: 0, width: '100%' }}>
                {
                    amountInBasket === 0 ?
                        <BasketButtonComponent product={product} onAdd={addOneProduct} style={styles.bottomButton} size='medium' /> :
                        <View style={[styles.bottomButton, { backgroundColor: 'transparent' }]} >
                            <AddRemoveProductInBasketPanelComponent product={product} onAdd={addOneProduct} onRemove={removeOneProduct} />
                        </View>
                }
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
        left: 0,
        margin: 16,
        alignContent: 'flex-start',
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
        marginBottom: '11%',
    },
    bottomButton: {
        flex: 1, height: '100%',
        width: '90%',
        gap: 12,
        alignSelf: 'center',
        justifyContent: 'center',
    }

});


export default ProductPageComponent;