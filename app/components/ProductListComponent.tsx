
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, } from 'react-native';
import { Product } from '../interfaces/Product';
import { Router } from 'expo-router';
import { commonStyles, dimensionsStyles } from '../styles/styles';
import ProductListCardComponent from './ProductListCardComponent';
import svgIcons from '@/assets/icons/svgIcons';


interface ProductListProps {
    data: Product[];
    router: Router;
}

function ListHeader() {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: 30,
            marginBottom: 16
        }}>
            <svgIcons.SortIcon width={20} height={20}></svgIcons.SortIcon>
            <Text style={styles.listTitle}>Сортировка</Text>
        </TouchableOpacity>
    )
}

function renderProduct({ item, router }: { item: Product, router: Router }) {
    return (
        <ProductListCardComponent
            data={item}
            router={router}
        />
    )
}

const ProductListComponent: React.FC<ProductListProps> = ({ data, router }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList style={styles.list}
                data={data}
                renderItem={({ item }) => renderProduct({ item: item, router: router })}
                keyExtractor={(item) => item.id}
                numColumns={2}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list: {
        padding: 16,
        paddingTop: 0,
    },

    listTitle: {
        fontSize: 18,
        fontWeight: 'semibold',
        fontFamily: commonStyles.text.fontFamily,
    },
    productCard: {
        height: dimensionsStyles.productListCard.height,
        width: dimensionsStyles.productListCard.width,
    },
    column: {
        gap: 10,
        marginBottom: 10,
    },
});

export default ProductListComponent;
