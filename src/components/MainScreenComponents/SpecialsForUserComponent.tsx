import React from 'react'
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { colorsStyles } from '@/src/styles/styles'
import { ScreenSectionTitleText } from '../Text/TextComponents'

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
            <ScreenSectionTitleText
                style={{ padding: 16 }}
                text='Для вас'
            />
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
    listContent: {
        gap: 10,
        justifyContent: 'center',
        paddingLeft: 16,
    },
})

export default SpecialsForUserComponent;