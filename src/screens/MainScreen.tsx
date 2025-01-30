import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from "expo-router";
import { Category } from "@/src//interfaces/Category";
import { Product } from "@/src//interfaces/Product";
import UserPanelComponent from "@/src//components/MainScreenComponents/UserPanelComponent";
import { prods } from "@/src//data/tempData";
import BonusCardComponent from "@/src//components/MainScreenComponents/BonusCardComponent";
import SpecialsForUserComponent from "@/src//components/MainScreenComponents/SpecialsForUserComponent";
import NewOffersForUserComponent from "@/src//components/MainScreenComponents/NewOffersForUserComponent";
import TopGoodsComponent from "@/src//components/TopGoodsComponent";
import { colorsStyles, commonStyles } from "@/src//styles/styles";
import PromotionsAndCouponsComponent from "@/src//components/MainScreenComponents/PromotionsAndCoupons";
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
                <UserPanelComponent></UserPanelComponent>
            </View>
            <View style={styles.card}>
                <BonusCardComponent></BonusCardComponent>
            </View>
            <View style={styles.specialsForUser}>
                <SpecialsForUserComponent></SpecialsForUserComponent>
            </View>
            <View style={{ backgroundColor: colorsStyles.mainGreyColor.color }}>
                <View style={styles.newOffers}>
                    <NewOffersForUserComponent></NewOffersForUserComponent>
                </View>
            </View>
            <View style={styles.topGoods}>
                <TopGoodsComponent
                    data={prods}
                    router={item.router}
                />
            </View>
            <View style={styles.couponsAndPromotions}>
                <PromotionsAndCouponsComponent />
            </View>
        </View>
    )
}

export const MainScreen: React.FC<MainScreenProps> = React.memo((props) => {
    const DATA: MainScreenProps[] = [
        props,
    ]
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <StatusBar translucent={true} backgroundColor="transparent" style='dark'></StatusBar>
                <FlatList
                    overScrollMode="never"
                    data={DATA}
                    bounces={false}
                    onEndReachedThreshold={10}
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
        paddingBottom: commonStyles.general.margin,
        backgroundColor: colorsStyles.mainWhiteColor.color,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    specialsForUser: {
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    topGoods: {
        paddingBottom: commonStyles.general.margin,
        backgroundColor: colorsStyles.mainGreyColor.color,
    },
    couponsAndPromotions: {
    }
})

export default React.memo(MainScreen);