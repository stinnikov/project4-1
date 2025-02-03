import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Router, useFocusEffect } from "expo-router";
import { Category } from "@/src//interfaces/Category";
import { Product } from "@/src//interfaces/Product";
import UserPanel from "@/src/components/MainScreenComponents/UserPanel";
import { prods } from "@/src//data/tempData";
import BonusCard from "@/src/components/MainScreenComponents/BonusCard";
import SpecialsForUser from "@/src/components/MainScreenComponents/SpecialsForUser";
import NewOffersForUser from "@/src/components/MainScreenComponents/NewOffersForUser";
import TopGoods from "@/src/components/TopGoods";
import { colorsStyles } from "@/src//styles/styles";
import PromotionsAndDiscounts from "@/src/components/MainScreenComponents/PromotionsAndDiscounts";
import { StatusBar } from "expo-status-bar";


interface MainScreenProps {
    categoriesData?: Category[];
    topGoodsData?: Product[];
    router: Router;
}

function renderScreen({ item }: { item: MainScreenProps }) {
    return (
        <View style={styles.container}>
            <View style={styles.userPanel}>
                <UserPanel></UserPanel>
            </View>
            <View style={styles.card}>
                <BonusCard></BonusCard>
            </View>
            <View style={styles.specialsForUser}>
                <SpecialsForUser></SpecialsForUser>
            </View>
            <View style={{ backgroundColor: colorsStyles.mainGreyColor.color }}>
                <View style={styles.newOffers}>
                    <NewOffersForUser></NewOffersForUser>
                </View>
            </View>
            <View style={styles.topGoods}>
                <TopGoods
                    data={prods}
                    router={item.router}
                    parentTab='home'
                />
            </View>
            <View style={styles.couponsAndPromotions}>
                <PromotionsAndDiscounts />
            </View>
        </View>
    )
}

export const MainScreen: React.FC<MainScreenProps> = React.memo((props) => {
    const router = props.router;
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [categoriesData, setCategoriesData] = useState<Category[]>(props.categoriesData ?? []);
    const [topGoodsData, setTopGoodsData] = useState<Product[]>(props.topGoodsData ?? []);
    const [mainScreenData, setMainScreenData] = useState<MainScreenProps[]>([{ router, categoriesData, topGoodsData }]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // получить посты с сервера 
            // получить данные для секции "для вас", в том числе и новинки
            // получить данные для секции товары в топе
            // получить данные для секции "тематическая секция"
            // получить картинки вкладок "промокоды" и "акции"
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    useFocusEffect(React.useCallback(() => {
        //fetchData();
        return () => {

        }
    }, []))

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <StatusBar translucent={false} backgroundColor={colorsStyles.mainBrightColor.color.toString()} style='dark'></StatusBar>
                <FlatList
                    overScrollMode="never"
                    data={mainScreenData}
                    bounces={false}
                    renderItem={renderScreen}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsStyles.mainDarkColor.color,
    },
    userPanel: {
        backgroundColor: colorsStyles.mainDarkColor.color,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    newOffers: {
        paddingBottom: 16,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    specialsForUser: {
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    topGoods: {
        paddingBottom: 16,
        backgroundColor: colorsStyles.mainGreyColor.color,
    },
    couponsAndPromotions: {
        backgroundColor: 'red',
    }
})

export default React.memo(MainScreen);