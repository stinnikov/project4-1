import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import { colorsStyles, commonStyles, dimensionsStyles } from '../styles/styles'

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
                    <Text style={styles.description}>
                        Эта история о том как я попал в зомби-апокалипсис, выживал среди зомбарей, выживал среди зомбачков
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
        backgroundColor: 'green',
    },
    card: {
        height: dimensionsStyles.circleStory.height, //250
        width: dimensionsStyles.circleStory.width, // 392
    },
    textContainer: {
        backgroundColor: 'aqua',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        maxWidth: dimensionsStyles.circleStory.width,
        overflow: 'hidden', // Скрыть переполненный текст
    },
    description: {
        fontSize: 11,
        color: 'black',
        // Убедитесь, что ширина текста не превышает ширину родительского контейнера
        width: '100%', // или установите фиксированную ширину, если нужно
    },
    imageBackground: {
        alignSelf: 'center',
        backgroundColor: colorsStyles.mainDarkColor.color,
        width: '100%',
        height: '100%',
    }
});

export default CircleStoryComponent;