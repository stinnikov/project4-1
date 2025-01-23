import React from 'react'
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { colorsStyles, commonStyles, dimensionsStyles } from '../../styles/styles'

interface NewOffersForUserProps {

}

const NewOffersForUserComponent: React.FC<NewOffersForUserProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Новинки</Text>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        source={{ uri: '' }}
                        style={styles.imageBackground}
                        resizeMode='contain'
                    />
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
        marginVertical: commonStyles.listTitle.margin,
        paddingLeft: commonStyles.listTitle.padding,
    },
    imageContainer: {
        width: 380,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        borderRadius: 14,
        alignSelf: 'center',
        backgroundColor: colorsStyles.mainGreyColor.color,
    }
})

export default NewOffersForUserComponent;