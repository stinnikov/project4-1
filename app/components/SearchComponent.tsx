import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { commonStyles, dimensionsStyles, colorsStyles } from "../styles/styles";
import BarComponent from "./BarComponent";
import svgIcons from "@/assets/icons/svgIcons";

interface SearchComponentProps {
    text?: string,
}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.searchBar}>
                <Text style={styles.searchBarText}>
                    Поиск
                </Text>
                <TouchableOpacity style={styles.qrCode}>
                    <svgIcons.FavoritesIcon></svgIcons.FavoritesIcon>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settings} onPress={() => { }}>
                <svgIcons.SettingsIcon stroke={'#7d7d7d'}></svgIcons.SettingsIcon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: dimensionsStyles.bar.height * 1.1,
        backgroundColor: colorsStyles.mainGreyColor.color,
        paddingHorizontal: 16,
        borderRadius: 12
    },
    searchBarText: {
        fontSize: 16,
        fontFamily: commonStyles.text.fontFamily,
    },
    qrCode: {

    },
    settings: {
        height: dimensionsStyles.bar.height * 1.1,

        width: dimensionsStyles.bar.height * 1.1,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: colorsStyles.mainGreyColor.color,

        borderRadius: commonStyles.general.borderRadius,
    },
    settingsIcon: {
        position: 'absolute',
        color: colorsStyles.mainDarkColor.color,
    },
})

export default SearchComponent;