import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { colorsStyles, dimensionsStyles } from '@/src/styles/styles'
import { Raleway400RegularText } from '../Text/TextComponents'

export interface CircleStoryProps {
    imgSrc: string,
}

const CirclePostForUser: React.FC<CircleStoryProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <ImageBackground
                        source={{ uri: 'https://i.pinimg.com/originals/7d/d8/39/7dd839ca259b644a5402bbf867fc4a31.jpg' }}
                        imageStyle={{ borderRadius: 100 }}
                        style={styles.imageBackground}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.textContainer}>
                    <Raleway400RegularText
                        style={{ fontSize: 12, textAlign: 'center' }}
                        text={`Текст\nв 3\nстроки\n`}
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
    card: {
        height: dimensionsStyles.circleStory.height, //250
        width: dimensionsStyles.circleStory.width, // 392
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colorsStyles.mainBrightColor.color,
    },
    textContainer: {
        marginTop: 8,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: dimensionsStyles.circleStory.width,
        overflow: 'hidden', // Скрыть переполненный текст
    },
    description: {
        paddingTop: 12,
        fontSize: 11,
        color: '#000',
        textAlign: 'center',
        // Убедитесь, что ширина текста не превышает ширину родительского контейнера
        width: '100%', // или установите фиксированную ширину, если нужно
    },
    imageBackground: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100,
        borderColor: 'transparent',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
});

export default CirclePostForUser;