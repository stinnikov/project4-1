import React from "react";
import { View, StyleSheet } from "react-native";
import { commonStyles, colorsStyles } from "../styles/styles";
import BarComponent from "./BarComponent";
import svgIcons from "@/assets/icons/svgIcons";

interface DeliveryBarComponentProps {
    addr?: string,
}

const DeliveryBarComponent: React.FC<DeliveryBarComponentProps> = (props) => {
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
        backgroundColor: colorsStyles.mainGreyColor.color,
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 10,
        paddingBottom: 10,
    },
    bar: {
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
})

export default DeliveryBarComponent;