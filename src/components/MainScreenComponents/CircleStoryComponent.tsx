import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import { colorsStyles, commonStyles, dimensionsStyles } from '@/src/styles/styles'

export interface CircleStoryProps {
    imgSrc: string,
}

const CircleStoryComponent: React.FC<CircleStoryProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <ImageBackground
                        source={{ uri: props.imgSrc }}
                        style={styles.imageBackground}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text numberOfLines={3} style={styles.description}>
                        Текст {'\n'} в 3 {'\n'} строки {'\n'}
                    </Text>
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
    card: {
        height: dimensionsStyles.circleStory.height, //250
        width: dimensionsStyles.circleStory.width, // 392
    },
    textContainer: {
        marginBottom: commonStyles.general.margin,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        maxWidth: dimensionsStyles.circleStory.width,
        overflow: 'hidden', // Скрыть переполненный текст
    },
    description: {
        paddingTop: 12,
        fontSize: 11,
        color: colorsStyles.mainWhiteColor.color,
        textAlign: 'center',
        // Убедитесь, что ширина текста не превышает ширину родительского контейнера
        width: '100%', // или установите фиксированную ширину, если нужно
    },
    imageBackground: {
        alignSelf: 'center',
        backgroundColor: '#929292',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colorsStyles.mainBrightColor.color,
        width: '100%',
        height: '100%',
    }
});

export default CircleStoryComponent;