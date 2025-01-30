import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'
import CirclePostForUserComponent, { CircleStoryProps } from './CirclePostForUserComponent'
import { colorsStyles, commonStyles } from '@/src/styles/styles'
import SvgIcons from '@/src/assets/icons/svgIcons';
import BonusCardComponent from './BonusCardComponent';

interface UserPanelProps {
    name?: string;
}

const UserPanelComponent: React.FC<UserPanelProps> = (props) => {
    function renderCircleStory({ item }: { item: CircleStoryProps }) {
        return (<CirclePostForUserComponent imgSrc={item.imgSrc}></CirclePostForUserComponent>)
    }
    const circleStoriesData: CircleStoryProps[] = [
        { imgSrc: '' },
        { imgSrc: '' },
        { imgSrc: '' },
        { imgSrc: '' },
        { imgSrc: '' },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.nameAndButtons}>

                <Text style={styles.name}>Имя пользователя</Text>

                <View style={styles.buttons}>
                    <SvgIcons.NotificationsIcon width={24} height={24}></SvgIcons.NotificationsIcon>
                    <SvgIcons.ProfileSettingsIcon width={24} height={24}></SvgIcons.ProfileSettingsIcon>
                </View>

            </View>
            <View>
                <FlatList
                    data={circleStoriesData}
                    horizontal={true}
                    renderItem={renderCircleStory}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    nameAndButtons: {
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: commonStyles.text.fontFamily,
        color: '#000',
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
    },
    list: {
        justifyContent: 'center'
    },
    listContent: {
        gap: 10,
        justifyContent: 'center',
        paddingLeft: 16,
    },
})

export default UserPanelComponent;