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
import ScreenHeaderComponent from "../components/ScreenHeaderComponent";

interface CategoryListScreenProps{
    router: Router,
    currentCategory: Category | undefined,
    data: Category[],
    topGoodsData?: Product[],
}

function renderScreen({item} : {item: CategoryListScreenProps}){
    const title: string = item.currentCategory?.name ?? 'Каталог';
    
    return(
        <View>
            <View>
                <BlockComponent 
                    content={<ScreenHeaderComponent title={title} router={router}/>}
                    contentStyle={{paddingBottom:0}}
                />
            </View>
            <View>
                <BlockComponent 
                    content={<SearchComponent />}
                />
            </View>

            <View>
                <TopGoodsComponent 
                    data={item.topGoodsData ?? products.slice(0,20)}
                    router={router}
                    isMainScreen={false}
                />
            </View>

            <View>
                <CategoryListComponent 
                    item={item.currentCategory}
                    data={item.data}
                    router={router}
                />
            </View>
        </View>
    )
}


const CategoryListScreen: React.FC<CategoryListScreenProps> = React.memo((props: CategoryListScreenProps) => {
    const DATA: CategoryListScreenProps[] = [
        {currentCategory: props.currentCategory, router: router, data:props.data}
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

export default CategoryListScreen;