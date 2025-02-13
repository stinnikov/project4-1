import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Router, useFocusEffect, useRouter } from "expo-router";
import { Category } from "@/src//interfaces/Category";
import { Product } from "@/src//interfaces/Product";
import UserPanel from "@/src/components/MainScreenComponents/UserPanel";
import { prods } from "@/src//data/tempData";
import SpecialsForUser from "@/src/components/MainScreenComponents/SpecialsForUser";
import NewOffersForUser from "@/src/components/MainScreenComponents/NewOffersForUser";
import TopGoods from "@/src/components/TopGoods";
import { colorsStyles, shadowStyles } from "@/src//styles/styles";
import PromotionsAndDiscounts from "@/src/components/MainScreenComponents/PromotionsAndDiscounts";
import useNavigationStore from "../store/navigationStore";
import { StatusBar } from "expo-status-bar";


interface MainScreenProps {
    categoriesData?: Category[];
    topGoodsData?: Product[];
}

const navigateToProductPage = (router: Router, product: Product) => {
    router.push(
        {
            pathname: '/(main)/(tabs)/(home)/product/[productId]',
            params: {
                productId: product.id,
            }
        }
    )
}

const addProductToBasket = () => {

}



export const MainScreen: React.FC<MainScreenProps> = React.memo((props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [categoriesData, setCategoriesData] = useState<Category[]>(props.categoriesData ?? []);
    const [topGoodsData, setTopGoodsData] = useState<Product[]>(props.topGoodsData ?? []);
    const [mainScreenData, setMainScreenData] = useState<MainScreenProps[]>([{ categoriesData, topGoodsData }]);

    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setRouter(router);
    }, [router, setRouter]);

    function renderScreen({ item }: { item: MainScreenProps }) {
        return (
            <View style={styles.container}>
                <StatusBar translucent style='dark' backgroundColor={'transparent'} />
                <UserPanel router={router}></UserPanel>
                <View style={[styles.specialsForUser, shadowStyles.regularShadow]}>
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
                        parentTab='home'
                    />
                </View>
                <View style={styles.couponsAndPromotions}>
                    <PromotionsAndDiscounts />
                </View>
            </View>
        )
    }

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
        <FlatList
            overScrollMode="never"
            data={mainScreenData}
            bounces={false}
            renderItem={renderScreen}
        />
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userPanel: {
    },
    newOffers: {
        paddingBottom: 16,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    specialsForUser: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    topGoods: {
        paddingBottom: 16,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    couponsAndPromotions: {
    }
})

export default MainScreen;