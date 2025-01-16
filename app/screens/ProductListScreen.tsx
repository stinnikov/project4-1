import React, { useMemo } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SearchComponent from "../components/SearchComponent";
import BlockComponent from "../components/BlockComponent";
import TopGoodsComponent from "../components/TopGoodsComponent";
import { products } from "../data/products";
import { router, Router, useRouter } from "expo-router";
import CategoryListComponent from "../components/CategoryListComponent";
import { Category } from "../interfaces/Category";
import { Product } from "../interfaces/Product";
import ProductListComponent from "../components/ProductListComponent";
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";

interface ProductListScreenProps{
    router: Router,
    data: Product[],
    categoryName: string,
}

function renderScreen({item} : {item: ProductListScreenProps}){
    return(
        <View>
            <View>
                <BlockComponent 
                    content={<ScreenHeaderComponent 
                        title={item.categoryName}
                        router={item.router}
                    />}
                    contentStyle={{paddingBottom:0}}
                />
            </View>
            <View>
                <BlockComponent 
                    content={<SearchComponent></SearchComponent>}
                />
            </View>

            <View>
                <ProductListComponent data={item.data} router={router}>

                </ProductListComponent>
            </View>
        </View>
    )
}


const ProductListScreen: React.FC<ProductListScreenProps> = React.memo((props) => {
    const DATA: ProductListScreenProps[] = [
        props,
    ]

    return(
        <SafeAreaProvider style={{flex:1}}>
            <SafeAreaView style={{flex: 1}} edges={['top']}>
                <FlatList
                    data={DATA}
                    renderItem={renderScreen}
                    />
            </SafeAreaView>
        </SafeAreaProvider>
    )}
);

const styles = StyleSheet.create({
    topGoods:{
        flex:1
    }
})

export default ProductListScreen;