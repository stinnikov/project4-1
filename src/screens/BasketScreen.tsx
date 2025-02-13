import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";
import ScreenHeader from "@/src/components/ScreenHeader";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import { prods } from "@/src//data/tempData";
import BasketProductList from "../components/BasketScreenComponents/BasketProductList";
import DeliveryBar from "../components/DeliveryBar";
import PromotionInBasketForm from "../components/BasketScreenComponents/PromotionInBasketForm";
import TopGoods from "../components/TopGoods";
import OrderAmount from "../components/BasketScreenComponents/OrderAmount";
import PaymentDetails from "../components/BasketScreenComponents/PaymentDetails";
import MakeOrderButton from "../components/BasketScreenComponents/MakeOrderButton";
import useNavigationStore from "../store/navigationStore";
import useBasketStore from "../store/basketStore";

interface BasketScreenProps {
}

const BasketScreen: React.FC<BasketScreenProps> = React.memo((props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState(false);
    const { initializeBasket } = useBasketStore();

    const router = useRouter();
    const setRouter = useNavigationStore(state => state.setRouter);

    useEffect(() => {
        // Устанавливаем router в Zustand хранилище
        setLoading(true);
        setRouter(router);
        initializeBasket().finally(() => { setLoading(false) });
    }, []);

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
                <View style={styles.header}>
                    <ScreenHeader
                        title={'Корзина'}
                    />
                </View>
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
                        data={prods}
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


    if (loading) {
        return <LoadingScreen />;
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
    header: {
        flexDirection: 'row',
        padding: 16,
        width: '100%'
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