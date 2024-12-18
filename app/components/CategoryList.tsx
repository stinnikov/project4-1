import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../interfaces/Category';
import { Link, Stack, useRouter, Router } from 'expo-router';

interface CategoryListProps {
    categories: Category[];
    parentLink: string;
    title?:string;
    router: Router;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, parentLink, router, title: titleName }) => {
    
    const [selectedProduct, setSelectedCategory] = useState<Category | null>(null);

    const renderCategory = ({ item }: { item: Category }) => (
        <TouchableOpacity onPress={() => { router.push( {
            pathname: item.depth == 2 ? `./products/[childlink]` : (parentLink + '/[childlink]/page') as string,
            params: { 
              childlink: item.id,
              page:item.id,
             },
          }  )}} style={styles.product}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    product: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    productName: {
        fontSize: 18,
    },
});

export default CategoryList;
