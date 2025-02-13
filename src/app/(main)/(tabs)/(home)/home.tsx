// App.tsx
import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Category } from "@/src/interfaces/Category";
import MainScreen from "@/src/screens/MainScreen";
import { prods } from "@/src/data/tempData";
import { Product } from "@/src/interfaces/Product";
import ProductCardScreen from "@/src/screens/ProductPageScreen";
import { StatusBar } from "expo-status-bar";

const categories: Category[] = [];

const Home = () => {
  return (
    <MainScreen></MainScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default Home;
