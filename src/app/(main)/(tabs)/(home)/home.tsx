// App.tsx
import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import MainScreen from "@/src/screens/MainScreen";
import { StatusBar } from "expo-status-bar";



const Home = () => {
  return (
    <MainScreen></MainScreen>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

