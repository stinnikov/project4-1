import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles'
import { Montserrat400RegularText, Montserrat600SemiBoldText } from '../Text/TextComponents'
import SvgIcons from '@/src/assets/icons/svgIcons'

interface BonusCardProps {

}

const BonusCard: React.FC<BonusCardProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Montserrat600SemiBoldText style={{ fontSize: 50 }} text="1000" />
                        <SvgIcons.InfoIcon style={{ marginTop: 15 }} />
                    </View>
                    <Montserrat600SemiBoldText style={{ fontSize: 22, bottom: 6 }} text="Бонусов" />
                </View>
                <View style={styles.numberContainer}>
                    <Montserrat400RegularText text="+7 (9XX) XXX XX-XX" style={{ fontSize: 20 }} />
                </View>
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
        justifyContent: "space-between",
    },
    textContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    numberContainer: {
        marginHorizontal: 20,
        marginBottom: 16,
    }
})

export default BonusCard;