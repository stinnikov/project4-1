// App.tsx
import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import MainScreen from "@/src/screens/MainScreen";
import { StatusBar } from "expo-status-bar";
import useNavigationStore from "@/src/store/navigationStore";



export default function () {
  const router = useRouter();
  const setRouter = useNavigationStore(state => state.setRouter);

  useEffect(() => {
    // Устанавливаем router в Zustand хранилище
    setRouter(router);
  }, [router, setRouter]);
  return (
    <MainScreen />
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

