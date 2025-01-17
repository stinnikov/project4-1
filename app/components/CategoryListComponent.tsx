import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import { Category } from "../interfaces/Category";
import { Router } from "expo-router";
import BlockComponent from "./BlockComponent";
import svgIcons from "@/assets/icons/svgIcons";
import commonStyles from "../styles/commonStyles";

interface CategoryListProps{
    item: Category | undefined, // current category
    data: Category[], //subcats
    router: Router,
}



function navigate(item: Category, router: Router){
    router.push( {
        pathname: '/(main)/(tabs)/(Catalog)/categories/[categoryId]',
        params: { 
            categoryId: item.id,
            categoryDepth: item.depth,
            },
        }  )
}

function navigateToProductList(item: Category, router: Router){
    router.push(
        {
            pathname:'/(main)/(tabs)/(Catalog)/products/[productList]',
            params:{
                productList:item.id,
                categoryId: item.id,
            }
        }
    )    
}


function takeAllProducts({props }: { props: CategoryListProps; }){
    if(isCategory(props.item))
    {
        return(
            <TouchableOpacity 
                style={styles.container}
                onPress={() => navigateToProductList(props.item as Category,props.router)}
                >
                <Text style={[styles.categoryTextContainer, {color: commonStyles.mainBrightColor.color}]}>Все продукты категории</Text>
                <View style={styles.rightIconContainer}>
                    <svgIcons.ArrowRightIcon style={[styles.rightIcon]} stroke={commonStyles.mainBrightColor.color} width={20} height={20}></svgIcons.ArrowRightIcon>
                </View>
            </TouchableOpacity>
        )
    }
}


function isCategory(item: any): item is Category{
    return item && typeof item.id === 'string' && typeof item.depth === 'number';
}

function renderCategory({ item, props }: { item: Category, props: CategoryListProps; }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigate(item, props.router)}
            >
            <Text style={styles.categoryTextContainer}>{item.name}</Text>
            <View style={styles.rightIconContainer}>
                <svgIcons.ArrowRightIcon style={styles.rightIcon} width={20} height={20}></svgIcons.ArrowRightIcon>
            </View>
        </TouchableOpacity>
    );
}

function renderList(props : CategoryListProps)
{
    if(props.item == undefined)
    {
        return(
            <FlatList
                data={props.data}
                renderItem={({item}) => renderCategory({item: item, props: props})}
                keyExtractor={item => item.id}
            />
        )
    }
    else
    {
        return(
            <FlatList
                data={props.data}
                renderItem={({item}) => renderCategory({item: item, props: props})}
                ListHeaderComponent={({item}) => takeAllProducts({props:props})}
                keyExtractor={item => item.id}
            />
        )
    }
    
}

const CategoryListComponent: React.FC<CategoryListProps> = ({item, data, router}) => {
    return(
        <BlockComponent 
            content={renderList({item, data, router,})}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        minHeight: commonStyles.categoryListElement.minHeight,
        borderTopWidth: commonStyles.categoryListElement.borderWidth,
        borderColor: commonStyles.categoryListElement.borderColor,
    },
    categoryTextContainer:{
        flex: 0.89,
        fontSize:16,
    },
    rightIconContainer:{
        flex:0.11,
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    rightIcon:{
        paddingRight: commonStyles.categoryListElement.marginRight,
    },
})

export default CategoryListComponent;