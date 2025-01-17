import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground, Pressable } from "react-native";
import ProductDescription from "./markup/productDescription";
import { Product } from "../interfaces/Product";
import { router, Router } from "expo-router";
import commonStyles from "../styles/commonStyles";
import svgIcons from "@/assets/icons/svgIcons";

interface ProductCardProps {
    data: Product,
    router: Router,
}

const ProductCardComponent: React.FC<ProductCardProps> = (props) => {
    const DATA: ProductCardProps[] = [
        props,
    ]
    return (
        <ScrollView contentContainerStyle={styles.card}>
            <View style={styles.containter}>
                <View style={{ height: commonStyles.productCardImage.height, width: commonStyles.productCardImage.width }}>
                    <ImageBackground source={{ uri: props.data.imageUrl }}
                        imageStyle={{ width: '100%', height: '100%' }}
                        style={{ width: '100%', height: '100%', backgroundColor: '#fff'}}
                        resizeMode="contain">
                        <Pressable style={{
                            margin: 16, // default margin
                            paddingRight: 2,
                            position: 'absolute', // поверх остальных
                            height: 36, // чуть больше размера иконки
                            width: 36,
                            alignItems: 'center', // иконка посередине
                            justifyContent: 'center',
                            borderRadius: 100,
                            shadowRadius:24,
                            shadowOpacity:0.2,
                            backgroundColor: commonStyles.mainGreyColor.color,
                        }}
                            onPress={() => { router.canGoBack() && router.back()  }}
                        >
                            <svgIcons.ArrowRightIcon rotation={180}></svgIcons.ArrowRightIcon>
                        </Pressable>
                        <Pressable style={{
                            direction:'rtl', 
                            margin: 16,
                            justifyContent:'center',
                            alignItems:'center',
                            alignSelf:'flex-end',
                            height: 36, // чуть больше размера иконки
                            width: 36,
                            shadowRadius:24,
                            shadowOpacity:0.2,
                            backgroundColor: commonStyles.mainGreyColor.color,
                            borderRadius: 100,
                            }}>
                            <svgIcons.FavoritesIcon width={24} height={24}></svgIcons.FavoritesIcon>
                        </Pressable>
                    </ImageBackground>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{props.data.name}</Text>
                </View>

                <View style={styles.price}>
                    <Text style={styles.priceText}>{props.data.price}</Text>

                    <View style={{ flex: 1, height: '100%', direction: 'rtl', justifyContent:'center' }}>
                        <TouchableOpacity style={styles.bottomButtonBlock}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'regular',
                                fontFamily: commonStyles.text.fontFamily,
                                color:commonStyles.basketButtonText.color,
                            }}>В корзину</Text>

                            <svgIcons.BasketIcon height={20} width={20} stroke={'#FFF'}></svgIcons.BasketIcon>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={styles.description}>
                <ProductDescription></ProductDescription>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    containter: {
        borderBottomWidth: 12,
        borderColor: commonStyles.mainGreyColor.color,
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
        gap:15,


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
        minHeight:28,
        borderRadius: 12,
        marginTop:8,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        backgroundColor: commonStyles.basketButton.color,
    }
    
});


export default ProductCardComponent;