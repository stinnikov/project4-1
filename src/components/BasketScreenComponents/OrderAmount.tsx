import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Router } from 'expo-router';
import { Montserrat400RegularText } from '../Text/TextComponents';
import { colorsStyles } from '@/src/styles/styles';

interface OrderAmountProps {
    sumOfOrder: string,
    discountOfOrder: string,
    totalSumOfOrder: string,
    style?: ViewStyle | ViewStyle[]
}

const OrderAmount: React.FC<OrderAmountProps> = React.memo((props) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Montserrat400RegularText text='Сумма заказа' />
                <Montserrat400RegularText text={props.sumOfOrder} />
            </View>
            <View style={styles.textContainer}>
                <Montserrat400RegularText style={{ color: colorsStyles.mainBrightColor.color }} text='Скидка' />
                <Montserrat400RegularText style={{ color: colorsStyles.mainBrightColor.color }} text={props.discountOfOrder} />
            </View>
            <View style={[styles.textContainer, { marginBottom: 0 }]}>
                <Montserrat400RegularText text='Итоговая сумма заказа' />
                <Montserrat400RegularText text={props.totalSumOfOrder} />
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    }
})

export default React.memo(OrderAmount)