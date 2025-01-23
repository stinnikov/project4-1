import React from 'react'
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { colorsStyles, commonStyles, dimensionsStyles } from '../../styles/styles'

interface NewOffersForUserProps {

}

const NewOffersForUserComponent: React.FC<NewOffersForUserProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={{ uri: '' }}
                        style={styles.imageBackground}
                        resizeMode='contain'>
                        <Text style={styles.imageBackgroundText}>Новинки</Text>
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
    title: {
        fontSize: commonStyles.listTitle.fontSize,
        fontWeight: commonStyles.listTitle.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        marginVertical: 8,
        paddingLeft: commonStyles.listTitle.padding,
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

export default NewOffersForUserComponent;