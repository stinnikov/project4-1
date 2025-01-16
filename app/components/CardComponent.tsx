import React, {useMemo} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, StyleProp, ViewStyle, ImageStyle, Image, TextStyle } from "react-native";
import { useRouter, Href, Router} from "expo-router";
import commonStyles from "../styles/commonStyles";
import { Category } from "../interfaces/Category";
import { Product } from "../interfaces/Product";

interface CardComponentProps<T>{
    item: T,
    style: StyleProp<ViewStyle>,
    imageStyle?:StyleProp<ImageStyle>,
    imageUri?: string,
    router: Router,
    titleText?: string,
    textStyle?: StyleProp<TextStyle>
}

function navigateToCategory(item: Category, router: Router)
{
    router.push({
        pathname: '/(main)/(tabs)/(Catalog)/categories/[categoryId]',
        params: { 
          categoryId: item.id,
          
          categoryDepth: item.depth,
         },
    })
}


function navigate<T>(item: T, router: Router){
    if(isCategory(item))
    {
        navigateToCategory(item, router);
    }
    
}

function isCategory(item: any): item is Category{
    return item && typeof item.id === 'string' && typeof item.depth === 'number';
}

function CardComponent<T>(props: CardComponentProps<T>)
{
    return(
        <View style={[cardStyles.container, props.style]}>
            <TouchableOpacity style={{flex:1}}
                onPress={() => {navigate(props.item, props.router)}}>
                <ImageBackground 
                    source={{uri:props.imageUri}} 
                    style={cardStyles.imageBackground} 
                    imageStyle={[cardStyles.image]}>

                    <Text style={[cardStyles.title]}>{props.titleText}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        padding: commonStyles.cardTitle.padding,
        fontSize: commonStyles.cardTitle.fontSize,
        fontWeight: commonStyles.cardTitle.fontWeight,
        color:'black',
        alignSelf:'flex-start',
    },
    imageBackground:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
        backgroundColor: commonStyles.mainGreyColor.color,
        borderRadius:12,
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius: commonStyles.image.borderRadius,
        resizeMode:'cover',
    }
})

export default React.memo(CardComponent);