
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../interfaces/Category';
import { Link, Stack, useRouter, Router } from 'expo-router';
import { productStyles } from '../styles/productStyles';

interface CategoryListProps {
    categories: Category[];
    parentLink: string;
    router: Router;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, parentLink, router }) => {
    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity onPress={() => { router.push( {
            pathname: item.depth == 2 ? "../products/products?categoryId=[categoryId]&categoryDepth=[categoryDepth]" : `./${parentLink}/categories?categoryId=[categoryId]&categoryDepth=[categoryDepth]`,
            params: { 
              categoryId: item.id,
              categoryDepth: item.depth,
             },
          }  )}} style={styles.category}>
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );


    return (
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    category: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    categoryName: {
        fontSize: 18,
    },
});

export default CategoryList;
