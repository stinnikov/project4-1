import React from 'react'
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { colorsStyles, dimensionsStyles, commonStyles } from '@/app/styles/styles'

interface PromotionsAndCouponsProps {

}

const PromotionsAndCouponsComponent: React.FC<PromotionsAndCouponsProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.couponsContainer}>
                    <ImageBackground
                        style={styles.imageBackground}
                        source={{ uri: '' }}>
                        <Text style={styles.imageBackgroundText}>Купоны</Text>
                    </ImageBackground>
                </View>
                <View style={styles.promotionsContainer}>
                    <ImageBackground
                        style={styles.imageBackground}
                        source={{ uri: '' }}>
                        <Text style={styles.imageBackgroundText}>Акции</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsStyles.mainWhiteColor.color,
    },
    content: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    couponsContainer: {
        flex: 1,
        height: dimensionsStyles.couponsAndPromotions.height,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    promotionsContainer: {
        flex: 1,
        height: dimensionsStyles.couponsAndPromotions.height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        width: '100%',
        height: dimensionsStyles.couponsAndPromotions.height,
        backgroundColor: 'purple',
        borderRadius: commonStyles.general.borderRadius,
    },
    imageBackgroundText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 16,
        marginTop: 8,
    }
})

export default PromotionsAndCouponsComponent;