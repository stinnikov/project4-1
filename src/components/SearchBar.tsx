import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewStyle, Text } from "react-native";
import { dimensionsStyles, colorsStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import { Montserrat400RegularText } from "./Text/TextComponents";

interface SearchBarProps {
    text?: string,
    style?: ViewStyle,
    contentStyle?: ViewStyle,
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity style={[styles.searchBar, props.contentStyle]}>
                <Montserrat400RegularText
                    text='Поиск'
                    style={{

                        flex: 1,
                    }}
                />
                <TouchableOpacity style={styles.qrCode}>
                    <svgIcons.QRCodeIcon stroke={colorsStyles.mainBrightColor.color} />
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.settings, props.contentStyle]} onPress={() => { }}>
                <svgIcons.SettingsIcon stroke={colorsStyles.mainDarkGreyColor.color}></svgIcons.SettingsIcon>
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
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        padding: 12,
        borderRadius: 12
    },
    qrCode: {

    },
    settings: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: colorsStyles.mainLightGreyColor.color,

        borderRadius: 12,
    },
    settingsIcon: {
        color: colorsStyles.mainDarkColor.color,
    },
})

export default SearchBar;