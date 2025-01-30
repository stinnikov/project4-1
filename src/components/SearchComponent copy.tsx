import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles, dimensionsStyles, colorsStyles } from "@/src/styles/styles";
import BarComponent from "./BarComponent";
import svgIcons from "@/src/assets/icons/svgIcons";

interface SearchComponentProps {
    text?: string,
}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
    return (
        <View style={styles.container}>
            <BarComponent
                text="Поиск"
                style={{ backgroundColor: colorsStyles.mainGreyColor.color, padding: 16, flex: 1, height: dimensionsStyles.bar.height * 1.1 }}
                textStyle={{ color: '#7d7d7d' }}
            />
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
        marginRight: 10,
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