import React from "react";
import { View, StyleSheet } from "react-native";
import { colorsStyles } from "@/src/styles/styles";
import BarComponent from "./BarComponent";
import svgIcons from "@/src/assets/icons/svgIcons";

interface DeliveryBarProps {
    addr?: string,
}

const DeliveryBar: React.FC<DeliveryBarProps> = (props) => {
    return (
        <View style={[styles.row]}>
            <View style={{ flex: 1 }}>
                <BarComponent
                    leftIcon={<svgIcons.PickUpIcon></svgIcons.PickUpIcon>}
                    rightIcon={<svgIcons.ArrowRightIcon></svgIcons.ArrowRightIcon>}
                    text='Адрес'
                    style={styles.bar}
                    iconSize={24}
                />
            </View>

            <View style={{ flex: 1 }}>
                <BarComponent
                    leftIcon={<svgIcons.ClockIcon></svgIcons.ClockIcon>}
                    rightIcon={<svgIcons.ArrowRightIcon></svgIcons.ArrowRightIcon>}
                    text='Время'
                    style={styles.bar}
                    iconSize={24}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 10,
        paddingBottom: 10,
    },
    bar: {
        backgroundColor: colorsStyles.mainGreyColor.color,
    },
})

export default DeliveryBar;