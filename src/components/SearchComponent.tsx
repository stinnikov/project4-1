import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { dimensionsStyles, colorsStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import { RegularText } from "./Text/TextComponents";

interface SearchComponentProps {
    text?: string,
    style?: ViewStyle,
}

const SearchComponent: React.FC<SearchComponentProps> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity style={styles.searchBar}>
                <RegularText
                    text='Поиск'
                />
                <TouchableOpacity style={styles.qrCode}>
                    <svgIcons.QRCodeIcon stroke={colorsStyles.mainBrightColor.color} />
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
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        paddingHorizontal: 16,
        borderRadius: 12
    },
    qrCode: {

    },
    settings: {
        height: dimensionsStyles.bar.height * 1.1,

        width: dimensionsStyles.bar.height * 1.1,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: colorsStyles.mainLightGreyColor.color,

        borderRadius: 12,
    },
    settingsIcon: {
        position: 'absolute',
        color: colorsStyles.mainDarkColor.color,
    },
})

export default SearchComponent;