import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";
import ScreenHeader from "@/src/components/ScreenHeader";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import BasketProductList from "../components/BasketScreenComponents/BasketProductList";
import DeliveryBar from "../components/DeliveryBar";
import PromotionInBasketForm from "../components/BasketScreenComponents/PromotionInBasketForm";
import TopGoods from "../components/ProductComponents/TopGoods";
import OrderAmount from "../components/BasketScreenComponents/OrderAmount";
import PaymentDetails from "../components/BasketScreenComponents/PaymentDetails";
import MakeOrderButton from "../components/BasketScreenComponents/MakeOrderButton";
import useNavigationStore from "../store/navigationStore";
import useBasketStore from "../store/basketStore";
import useProductStore from "../store/productsStore";

interface BasketScreenProps {
}

const BasketScreen: React.FC<BasketScreenProps> = React.memo((props) => {
    const [refreshing, setRefreshing] = useState(false);
    const { products } = useProductStore();
    const { initializeBasket } = useBasketStore();

    const refreshData = async () => {
        try {
            setRefreshing(true);
            initializeBasket().finally(() => { setRefreshing(false) })
        } catch (error) {
            console.error(error);
        }
    };

    function renderScreen() {
        return (
            <View style={{ flex: 1 }}>
                <ScreenHeader
                    title={'Корзина'}
                />
                <View style={styles.deliveryBar}>
                    <DeliveryBar />
                </View>
                <View style={styles.productList}>
                    <BasketProductList />
                </View>
                <View style={styles.promotions}>
                    <PromotionInBasketForm />
                </View>
                <View>
                    <TopGoods
                        data={products.slice(0, 10)}
                        parentTab="basket"
                    />
                </View>
                <View style={styles.orderAmount}>
                    <OrderAmount sumOfOrder="1199.99 руб" discountOfOrder="200 руб" totalSumOfOrder="999.99 руб" />
                </View>
                <View style={{ margin: 16 }}>
                    <PaymentDetails />
                </View>
                <View style={{ margin: 16 }}>
                    <MakeOrderButton />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: colorsStyles.mainWhiteColor.color }}>
            <SafeAreaView style={{ flex: 1 }} edges={['top']}>
                <FlatList
                    data={[{}]}
                    renderItem={renderScreen}
                    refreshControl={
                        <RefreshControl
                            tintColor={colorsStyles.mainBrightColor.color}
                            colors={[colorsStyles.mainBrightColor.color]}
                            refreshing={refreshing}
                            onRefresh={refreshData}
                        />
                    }
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
})





const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    deliveryBar: {
        marginHorizontal: 16,
    },
    productList: {
        flex: 1,
        margin: 16,
    },
    promotions: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    orderAmount: {
        margin: 16,
    }
})

export default React.memo(BasketScreen);