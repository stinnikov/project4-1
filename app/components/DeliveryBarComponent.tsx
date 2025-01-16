import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import commonStyles from "../styles/commonStyles";
import Icon from 'react-native-vector-icons/FontAwesome'
import BarComponent from "./BarComponent";
import BlockComponent from "./BlockComponent";
import svgIcons from "@/assets/icons/svgIcons";

interface DeliveryBarComponentProps {
    addr?: string,
}

function renderDeliveryBar() {
    return (
        <View style={[styles.row]}>
            <View style={{ flex: 1 }}>
                <BarComponent
                    leftIcon={<svgIcons.PickUpIcon></svgIcons.PickUpIcon>}
                    rightIcon={<svgIcons.ArrowRightIcon></svgIcons.ArrowRightIcon>}
                    text='Адрес'
                    style={{ backgroundColor: 'white' }}
                    iconSize={24}
                />
            </View>

            <View style={{ flex: 1 }}>
                <BarComponent
                    leftIcon={<svgIcons.ClockIcon></svgIcons.ClockIcon>}
                    rightIcon={<svgIcons.ArrowRightIcon></svgIcons.ArrowRightIcon>}
                    text='Время'
                    style={{ backgroundColor: 'white' }}
                    iconSize={24}
                />
            </View>
        </View>
    );
}
const DeliveryBarComponent: React.FC<DeliveryBarComponentProps> = (props) => {
    return (
        renderDeliveryBar()
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: commonStyles.mainGreyColor.color,
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 10,
        paddingBottom: 10,
    }

})

export default DeliveryBarComponent;