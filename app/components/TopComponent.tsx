import React from "react";
import { View, StyleSheet } from "react-native";
import DeliveryBarComponent from "./DeliveryBarComponent";
import SearchComponent from "./SearchComponent";
import BlockComponent from "./BlockComponent";
import commonStyles from "../styles/commonStyles";


function renderDelivery() {
    return (
        <View style={styles.deliveryBlock}>
            <DeliveryBarComponent></DeliveryBarComponent>
        </View>
    )
}

function renderSearch() {
    return (
        <View style={styles.search}>
            <SearchComponent></SearchComponent>
        </View>
    )
}
const TopComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <View>
                <BlockComponent
                    style={styles.deliveryBlock}
                    content={renderDelivery()}
                />
            </View>
            <View>
                <BlockComponent
                    style={styles.search}
                    content={renderSearch()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryBlock: {
        backgroundColor: commonStyles.mainGreyColor.color,
    },
    search: {
        justifyContent: 'center',
    },
})

export default React.memo(TopComponent);