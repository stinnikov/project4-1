
import React, { memo, useCallback, useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '@/src/interfaces/Product';
import { Router } from 'expo-router';
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles';
import ProductCard from './ProductCard';
import svgIcons from '@/src/assets/icons/svgIcons';
import { Montserrat600SemiBoldText } from './Text/TextComponents';


interface ProductListProps {
    data: Product[];
    router: Router;
    release?: boolean; // Добавляем пропс для сигнала очистки
    parentTab: 'catalog' | 'favourites' | 'home' | 'profile' | 'basket'
}

const getItemLayout = (data: any, index: number) => ({
    length: dimensionsStyles.productCard.height,
    offset: dimensionsStyles.productCard.height * index,
    index,
});

const ListHeader = memo(() =>
(
    <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 30, marginBottom: 16, }}>
        <svgIcons.SortIcon fill={colorsStyles.mainBrightColor.color} width={18} height={18} />
        <Montserrat600SemiBoldText
            style={{ color: colorsStyles.mainBrightColor.color }}
            text='Сортировка' />
    </TouchableOpacity>
));

const ProductList: React.FC<ProductListProps> = memo((props) => {

    const [products, setProducts] = useState<Product[]>(props.data);

    function navigateToProduct(product: Product) {
        if (props.parentTab === 'catalog') {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/catalog/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'favourites') {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(favourites)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'home') {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(home)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'profile') {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(profile)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
        else if (props.parentTab === 'basket') {
            props.router.push(
                {
                    pathname: '/(main)/(tabs)/(basket)/product/[productId]',
                    params: {
                        productId: product.id,
                    }
                }
            )
        }
    }

    const renderProduct = useCallback(({ item }: { item: Product }) => (
        <ProductCard
            data={item}
            router={props.router}
            parentTab={props.parentTab}
            navigateToProduct={navigateToProduct}
        />
    ), [props.router]);

    // useEffect для обработки сигнала очистки
    useEffect(() => {
        // Очистка ресурсов при получении сигнала от родительского компонента
        if (props.release) {
            let firstProduct = products[0];
            setProducts([firstProduct]);
        }
        else {
            setProducts(props.data);
        }

        // Возвращаем функцию очистки, если нужно
        return () => {
            setProducts([]);
        };
    }, [props.release]); // Зависимость от функции onClear

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={2}
                initialNumToRender={2}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
                getItemLayout={getItemLayout}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 16,
    },
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});

export default ProductList;
