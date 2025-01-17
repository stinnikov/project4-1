import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import commonStyles from "../styles/commonStyles";
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
        marginRight: commonStyles.searchBar.marginRight
    },
    settings: {
        height: commonStyles.bar.height,
        width: commonStyles.bar.height,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: commonStyles.searchSettings.backgroundColor,

        borderWidth: commonStyles.bar.borderWidth,
        borderRadius: commonStyles.bar.borderRadius,
    },
    settingsIcon: {
        position: 'absolute',
        color: 'black',
    },
})

export default SearchComponent;