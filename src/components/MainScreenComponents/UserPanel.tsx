import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CirclePostForUser, { CircleStoryProps } from './CirclePostForUser'
import SvgIcons from '@/src/assets/icons/svgIcons';
import { Raleway600SemiBoldText } from '../Text/TextComponents';

interface UserPanelProps {
    name?: string;
}

const UserPanel: React.FC<UserPanelProps> = (props) => {
    function renderCircleStory({ item }: { item: CircleStoryProps }) {
        return (<CirclePostForUser imgSrc={item.imgSrc}></CirclePostForUser>)
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

                <Raleway600SemiBoldText
                    text='Имя пользователя'
                />

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

export default UserPanel;