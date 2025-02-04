import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Category } from "@/src/interfaces/Category";
import { Router } from "expo-router";
import svgIcons from "@/src/assets/icons/svgIcons";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat400RegularText } from "../Text/TextComponents";

interface CategoryListProps {
    currentCategory: Category | undefined, // current category
    data: Category[], //subcats
    router: Router,
}


const CategoryList: React.FC<CategoryListProps> = (props) => {
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

    function categoryListHeader() {
        if (isCategory(props.currentCategory)) {
            return (
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => navigateToProductList(props.currentCategory as Category, props.router)}
                >
                    <Montserrat400RegularText
                        style={[styles.categoryText, { color: colorsStyles.mainBrightColor.color }]}
                        text="Все продукты категории"
                    />
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
                <Montserrat400RegularText
                    style={styles.categoryText}
                    text={item.name}
                />
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
            ListHeaderComponent={categoryListHeader}
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

export default CategoryList;