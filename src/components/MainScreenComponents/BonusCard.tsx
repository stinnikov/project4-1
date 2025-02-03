import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles'

interface BonusCardProps {

}

const BonusCard: React.FC<BonusCardProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardText}>1000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 16,
    },
    card: {
        borderRadius: 24,
        backgroundColor: colorsStyles.mainGreyColor.color,
        height: dimensionsStyles.bonusCard.height,
        width: dimensionsStyles.bonusCard.width,
    },
    cardText: {
        fontSize: 36,
        color: '#000',
        paddingTop: 16,
        paddingLeft: 16,
        fontWeight: 'bold'
    }
})

export default BonusCard;