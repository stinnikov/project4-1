import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList, StatusBar} from "react-native";
import { Stack, Router } from "expo-router";
import CategoryCardListComponent from "../components/CategoryCardListComponent";
import { Category } from "../interfaces/Category";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TopComponent from "../components/TopComponent";
import BlockComponent from "../components/BlockComponent";
import TopGoodsComponent from "../components/TopGoodsComponent";
import commonStyles from "../styles/commonStyles";
import { products } from "../data/products";

interface CatalogScreenProps{
    data: Category[];
    router: Router;
}


function renderScreen (props: CatalogScreenProps){
    return(
        <View style={{flex:1}}>
            <View>
                <TopComponent></TopComponent>
            </View>
            <View>
                <BlockComponent content={
                    <CategoryCardListComponent 
                        data={props.data} 
                        isMainScreen={false} 
                        router={props.router} 
                        />}>
                </BlockComponent>
            </View>
        </View>
    )
}
  
export const CatalogScreen: React.FC<CatalogScreenProps> = (props) => {
    const DATA: CatalogScreenProps[] = [
        props,
    ]

    return(
        <SafeAreaProvider style={{flex:1}}>
            <SafeAreaView style={{flex: 1}} edges={['top']}>
                <FlatList
                    data={DATA}
                    bounces={false}
                    onEndReachedThreshold={10}
                    renderItem={({item}) => renderScreen(item)}
                    />
            </SafeAreaView>
        </SafeAreaProvider>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    addressBar:{
        flex: 1,
    },
    search:{
        flex:0.66,
    },
    catalog:{
        flex:5,
    },
})

export default CatalogScreen;