import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles'
import { Montserrat400RegularText } from '../Text/TextComponents'

interface NewOffersForUserProps {

}

const NewOffersForUser: React.FC<NewOffersForUserProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={{ uri: '' }}
                        style={styles.imageBackground}
                        resizeMode='contain'>
                        <Montserrat400RegularText
                            style={{ paddingTop: 8, paddingLeft: 16, color: 'white' }}
                            text='Новинки новинки новинки'
                        />
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,

    },
    imageContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
        paddingTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imageBackground: {
        width: '100%',
        height: dimensionsStyles.couponsAndPromotions.height,
        backgroundColor: colorsStyles.mainBrightColor.color,
        borderRadius: 12,
    },
    imageBackgroundText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 16,
        marginTop: 8,
    }
})

export default NewOffersForUser;