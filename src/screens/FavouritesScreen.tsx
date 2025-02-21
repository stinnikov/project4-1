import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SearchBar from "@/src/components/SearchBar";
import { useRouter } from "expo-router";
import ScreenHeader from "@/src/components/ScreenHeader";
import { colorsStyles } from "@/src//styles/styles";
import LoadingScreen from "./LoadingScreen";
import FavouritesProductList from "../components/FavouritesScreenComponents/FavouritesProductList";
import useNavigationStore from "../store/navigationStore";
import Product from "../interfaces/Product";

interface FavouritesScreenProps {
    favourites: Product[],
    categoryName: string,
}

const FavouritesScreen: React.FC<FavouritesScreenProps> = React.memo((props) => {
    const [refreshing, setRefreshing] = useState(false);

    const refreshData = async () => {
        try {
            setRefreshing(true);
            setRefreshing(false);
        } catch (error) {
            console.error(error);
        }
    };

    function renderScreen() {
        return (
            <View style={{ flex: 1 }}>
                <ScreenHeader
                    title='Избранное'
                />
                <View style={styles.searchBar}>
                    <SearchBar />
                </View>
                <View style={styles.productList}>
                    <FavouritesProductList favourites={props.favourites} />
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
});


const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    header: {

    },
    searchBar: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    productList: {
        flex: 1,
    }
})

export default React.memo(FavouritesScreen);