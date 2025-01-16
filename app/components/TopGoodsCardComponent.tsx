import React, {useState, useEffect} from "react";
import { View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, ImageBackground, Text, Button } from "react-native";
import { Product } from "../interfaces/Product";
import { Router } from "expo-router";
import commonStyles from "../styles/commonStyles";
import svgIcons from "@/assets/icons/svgIcons";
import { getSingleProductById } from '@/app/services/ProductService';

interface TopGoodsCardProps {
    data: Product,
    router: Router,
    isMainScreen?:boolean,
}

function navigateToProduct(item: Product, router: Router, isMainScreen?: boolean) {
    if(isMainScreen == false)
    {
        console.log('da');
        router.push(
            {
                pathname: '/(main)/(tabs)/(Catalog)/products/product/[productId]',
                params: {
                    productId: item.id,
                }
            }
        )
    }
    else{
        router.push(
            {
                pathname: '/(main)/(tabs)/(index)/topGoods/[topGoodId]',
                params: {
                    topGoodId: item.id,
                }
            }
        )
    }
}

const TopGoodsCardComponent: React.FC<TopGoodsCardProps> = (props) => {
    const [Product,setProduct] = useState<Product>({"id": "60470940-b9fe-11ea-80c9-002590bc5b5f",
        "name": "Professional Estel XTRO EX/NY Пигмент прямого действия для волос Желтый 100мл ",
        "price": 510,
        "unit": "штука",
        "description": "Описание отсутствует",
        "imageUrl": "https://api.hk19.ru/goods_photos/115%C2%A0124.jpg",
        "categoryIds": [
          "72a9eeff-080b-444d-bb47-569470455e98",
          "24510936-8140-43e3-87d5-a0b87d066aee",
          "057e0e57-768e-407b-afb7-91f23d180571"
        ]});
        useEffect(()=>{
            const getEntries = async()=>{
                let prod:Product;
                
                if(typeof(props.data.id)=="string")
                {
                    var temp= await getSingleProductById(props.data.id)
                    if(temp!==undefined)
                    {
                        prod = temp;
                        setProduct(prod);
                    }
                }
            }
            getEntries();
        },[])
    return (
        <View style={[cardStyles.container]}>
            <View style={cardStyles.imageTitleBlock}>
                <TouchableOpacity
                    onPress={() => { navigateToProduct(props.data, props.router, props.isMainScreen) }}>
                    <ImageBackground
                        source={{ uri: Product.imageUrl}}
                        style={[cardStyles.imageBackground]}
                        imageStyle={[cardStyles.image]}>
                    </ImageBackground>
                    <Text style={cardStyles.title}>{Product.name}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={cardStyles.bottomButtonBlock}>
                <svgIcons.BasketIcon width={16} height={16} stroke={'#FFF'}></svgIcons.BasketIcon>
                <Text style={{
                    fontSize:14, 
                    fontFamily:commonStyles.text.fontFamily, 
                    color:commonStyles.basketButtonText.color}}>В корзину</Text>
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
        marginRight:-4,
    },
    imageTitleBlock: {
        height: commonStyles.topGoodsCard.height,
        width: commonStyles.topGoodsCard.width
    },
    title: {
        padding: commonStyles.cardTitle.padding,
        fontSize: commonStyles.topGoodsCard.fontSize,
        fontWeight: commonStyles.topGoodsCard.fontWeight,
        fontFamily:commonStyles.text.fontFamily,
        color: commonStyles.text.color,
        
        alignSelf: 'flex-start',
    },
    imageBackground: {
        width: commonStyles.topGoodsImageBackground.width,
        height: commonStyles.topGoodsImageBackground.height,
        overflow: 'hidden',
    },
    image: {
        borderTopLeftRadius: commonStyles.image.borderRadius,
        borderTopRightRadius: commonStyles.image.borderRadius,
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

export default TopGoodsCardComponent;

