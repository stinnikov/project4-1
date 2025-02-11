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
        <View style={[styles.container]}>
            <BarComponent
                leftIcon={<svgIcons.PickUpIcon></svgIcons.PickUpIcon>}
                rightIcon={<svgIcons.ArrowRightIcon></svgIcons.ArrowRightIcon>}
                text='Адрес'
                iconSize={24}
            />
            <BarComponent
                leftIcon={<svgIcons.ClockIcon></svgIcons.ClockIcon>}
                rightIcon={<svgIcons.ArrowRightIcon></svgIcons.ArrowRightIcon>}
                text='Время'
                iconSize={24}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 10
    },
})

export default DeliveryBar;