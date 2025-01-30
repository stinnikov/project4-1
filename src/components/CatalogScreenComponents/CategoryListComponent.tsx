import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Button } from "react-native";
import { Category } from "@/src/interfaces/Category";
import { Router } from "expo-router";
import svgIcons from "@/src/assets/icons/svgIcons";
import { colorsStyles, commonStyles, textStyles } from "@/src/styles/styles";

interface CategoryListProps {
    currentCategory: Category | undefined, // current category
    data: Category[], //subcats
    router: Router,
}





const CategoryListComponent: React.FC<CategoryListProps> = (props) => {
    function navigate({ item }: { item: Category }) {
        if (props.currentCategory)
            props.router.push({
                pathname: '/(main)/(tabs)/catalog/categories/[categoryId]',
                params: {
                    categoryId: item.id,
                    categoryDepth: item.depth,
                },
            })
    }

    function navigateToProductList(item: Category, router: Router) {
        router.push(
            {
                pathname: '/(main)/(tabs)/catalog/products/[productList]',
                params: {
                    productList: item.id,
                    categoryId: item.id,
                }
            }
        )
    }

    function takeAllProducts() {
        if (isCategory(props.currentCategory)) {
            return (
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => navigateToProductList(props.currentCategory as Category, props.router)}
                >
                    <Text style={[styles.categoryText, { color: colorsStyles.mainBrightColor.color }]}>Все продукты категории</Text>
                    <View style={styles.rightIconContainer}>
                        <svgIcons.ArrowRightIcon style={[styles.rightIcon]} stroke={colorsStyles.mainBrightColor.color}></svgIcons.ArrowRightIcon>
                    </View>
                </TouchableOpacity>
            )
        }
    }


    function isCategory(item: any): item is Category {
        return item && typeof item.id === 'string' && typeof item.depth === 'number';
    }

    function renderCategory({ item }: { item: Category }) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => { navigate({ item }) }}>
                <Text style={styles.categoryText}>{item.name}</Text>
                <View style={styles.rightIconContainer}>
                    <svgIcons.ArrowRightIcon style={[styles.rightIcon]}></svgIcons.ArrowRightIcon>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList
            data={props.data}
            renderItem={renderCategory}
            ListHeaderComponent={takeAllProducts}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 38,
        borderTopWidth: 2,
        borderColor: '#cfcfcf',
    },
    categoryText: {
        flex: 0.89,
        fontSize: commonStyles.text.fontSize,
        letterSpacing: commonStyles.text.letterSpacing,
        fontFamily: commonStyles.text.fontFamily
    },
    rightIconContainer: {
        flex: 0.11,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    rightIcon: {
        paddingRight: 16,
    },
})

export default CategoryListComponent;