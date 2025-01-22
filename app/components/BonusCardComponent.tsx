import React from 'react'
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { colorsStyles, commonStyles, dimensionsStyles } from '../styles/styles'

interface BonusCardProps {

}

const BonusCardComponent: React.FC<BonusCardProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
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
        backgroundColor: 'yellow',
        height: dimensionsStyles.bonusCard.height,
        width: dimensionsStyles.bonusCard.width,
    }
})

export default BonusCardComponent;