import React from 'react'
import { View, StyleSheet, ImageBackground, ImageSourcePropType, Text, FlatList } from 'react-native'
import { colorsStyles, commonStyles, dimensionsStyles } from '../../styles/styles'

interface SpecialsForUserProps {

}

const SpecialsForUserComponent: React.FC<SpecialsForUserProps> = (props) => {
    const data = [{}, {}, {}, {}, {}, {},]
    function renderSpecialsCard() {
        return (
            <View style={styles.specialsCardContainer}>
                <ImageBackground style={styles.specialCardImageBackground} source={{ uri: '' }} resizeMode='contain'>

                </ImageBackground>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>Для вас</Text>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={renderSpecialsCard}
                horizontal={true}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    specialsCardContainer: {
        width: 160,
        height: 118,
    },
    specialCardImageBackground: {
        width: '100%',
        height: '100%',
        borderRadius: 14,
        backgroundColor: colorsStyles.mainGreyColor.color,
    },
    list: {

    },
    listTitle: {
        fontSize: commonStyles.listTitle.fontSize,
        fontWeight: commonStyles.listTitle.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        marginVertical: commonStyles.listTitle.margin,
        paddingLeft: commonStyles.listTitle.padding,
    },
    listContent: {
        gap: 10,
        justifyContent: 'center',
        paddingLeft: 16,
    },
})

export default SpecialsForUserComponent;