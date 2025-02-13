// App.tsx
import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import MainScreen from "@/src/screens/MainScreen";
import { StatusBar } from "expo-status-bar";



export default function () {
  const router = useRouter();
  return (

    <MainScreen router={router}></MainScreen>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});

