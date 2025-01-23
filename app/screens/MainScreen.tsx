import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from "expo-router";
import { Category } from "../interfaces/Category";
import { Product } from "../interfaces/Product";
import UserPanelComponent from "../components/MainScreenComponents/UserPanelComponent";
import { prods } from "../data/tempData";
import BonusCardComponent from "../components/MainScreenComponents/BonusCardComponent";
import SpecialsForUserComponent from "../components/MainScreenComponents/SpecialsForUserComponent";
import NewOffersForUserComponent from "../components/MainScreenComponents/NewOffersForUserComponent";
import TopGoodsComponent from "../components/TopGoodsComponent";
import { colorsStyles, commonStyles } from "../styles/styles";


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
            <View>
                <SpecialsForUserComponent></SpecialsForUserComponent>
            </View>
            <View style={styles.newOffers}>
                <NewOffersForUserComponent></NewOffersForUserComponent>
            </View>
            <View style={styles.topGoods}>
                <TopGoodsComponent
                    data={prods}
                    router={item.router}
                />
            </View>
        </View>
    )
}

function renderTop() {
    return (
        <View style={{ backgroundColor: 'red', flex: 1 }}>

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
                <FlatList
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
    },
    userPanel: {
        marginBottom: commonStyles.general.margin,
        backgroundColor: colorsStyles.mainDarkColor.color,
    },
    card: {
        marginVertical: commonStyles.general.margin,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newOffers: {
        marginVertical: commonStyles.general.margin,
    },
    topGoods: {
        marginVertical: commonStyles.general.margin,
        backgroundColor: colorsStyles.mainGreyColor.color,
    },

})

export default React.memo(MainScreen);