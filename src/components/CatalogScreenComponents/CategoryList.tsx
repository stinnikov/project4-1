import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Category } from "@/src/interfaces/Category";
import { Router } from "expo-router";
import svgIcons from "@/src/assets/icons/svgIcons";
import { colorsStyles } from "@/src/styles/styles";
import { Montserrat400RegularText } from "../Text/TextComponents";
import useNavigationStore from "@/src/store/navigationStore";
import useCategoryStore from "@/src/store/categoryStore";

interface CategoryListProps {
    currentCategory: Category, // current category
    categories: Category[], //subcats
}



const CategoryList: React.FC<CategoryListProps> = (props) => {
    const { navigateToProductListScreen, navigateToCategoryListScreen } = useNavigationStore();
    const { categories } = useCategoryStore();

    function categoryListHeader() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigateToProductListScreen(props.currentCategory)}
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

    function renderCategory({ item }: { item: Category }) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => { categories?.length === 0 ? navigateToProductListScreen(props.currentCategory) : navigateToCategoryListScreen(item) }}>
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
            data={props.categories}
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
        minHeight: 40,
        borderTopWidth: 1,
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