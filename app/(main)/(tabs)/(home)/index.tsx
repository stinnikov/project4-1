// App.tsx
import React from "react";
import { View, SafeAreaView, StyleSheet, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Category } from "../../../interfaces/Category";
import MainScreen from "@/app/screens/MainScreen";

const categories: Category[] = [];

const Home = () => {
  var router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <MainScreen router={router}></MainScreen>
      <Stack initialRouteName=""></Stack>
    </View>
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
