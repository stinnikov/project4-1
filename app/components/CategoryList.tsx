
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../interfaces/Category';
import { Link, Stack, useRouter, Router } from 'expo-router';
import { productStyles } from '../styles/productStyles';
import { categoryStyles } from '../styles/categoryStyles';

interface CategoryListProps {
    categories: Category[];
    parentLink: string;
    router: Router;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, parentLink, router }) => {
    
    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity onPress={() => { router.push( {
            pathname: item.depth == 2 ? "./products/[childlink]" : `./${parentLink}/[childlink]/page`,
            params: { 
              childlink: item.id,
             },
          }  )}} style={categoryStyles.category}>
            <Text>{item.name}</Text>
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

export default CategoryList;
