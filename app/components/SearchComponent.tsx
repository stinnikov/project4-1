import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles, dimensionsStyles, colorsStyles } from "../styles/styles";
import BarComponent from "./BarComponent";
import svgIcons from "@/assets/icons/svgIcons";

interface SearchComponentProps {
    text?: string,
}

function renderSearch() {
    return (
        <View style={styles.container}>
            <BarComponent
                text="Поиск"
                style={{ backgroundColor: '#cfcfcf', padding: 16, flex: 1 }}
                textStyle={{ color: '#7d7d7d' }}
            />
            <TouchableOpacity style={styles.settings} onPress={() => { }}>
                <svgIcons.SettingsIcon></svgIcons.SettingsIcon>
            </TouchableOpacity>
        </View>
    )
}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
    return (
        renderSearch()
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
    },
    searchBar: {
        marginRight: 10,
    },
    settings: {
        height: dimensionsStyles.bar.height,
        width: dimensionsStyles.bar.height,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: colorsStyles.mainGreyColor.color,

        borderRadius: commonStyles.general.borderRadius,
    },
    settingsIcon: {
        position: 'absolute',
        color: colorsStyles.mainBlackColor.color,
    },
})

export default SearchComponent;