import React from 'react'
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { colorsStyles, dimensionsStyles, commonStyles } from '@/app/styles/styles'

interface BonusCardProps {

}

const BonusCardComponent: React.FC<BonusCardProps> = (props) => {
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
        backgroundColor: '#E1FF00',
        height: dimensionsStyles.bonusCard.height,
        width: dimensionsStyles.bonusCard.width,
    },
    cardText: {
        fontSize: 36,
        paddingVertical: 0,
        paddingTop: commonStyles.general.padding,
        paddingLeft: commonStyles.general.padding,
        fontFamily: commonStyles.text.fontFamily,
        fontWeight: 'bold'
    }
})

export default BonusCardComponent;