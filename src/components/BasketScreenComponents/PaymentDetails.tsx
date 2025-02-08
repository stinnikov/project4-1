import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Router } from 'expo-router';
import { Montserrat400RegularText, Raleway600SemiBoldText } from '../Text/TextComponents';
import { colorsStyles } from '@/src/styles/styles';
import SvgIcons from '@/src/assets/icons/svgIcons';

interface PaymentDetailsProps {
    router: Router,
    style?: ViewStyle | ViewStyle[]
}

const PaymentDetails: React.FC<PaymentDetailsProps> = React.memo((props) => {
    return (
        <View style={styles.container}>
            <Raleway600SemiBoldText style={{ fontSize: 20, marginBottom: 20 }} text='Способ оплаты' />
            <View style={styles.textContainer}>
                <Montserrat400RegularText style={{ color: colorsStyles.mainDarkGreyColor.color }} text='Выберите способ оплаты' />
                <SvgIcons.ArrowRightIcon />
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
    }
})

export default React.memo(PaymentDetails)