import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import CirclePostForUser, { CircleStoryProps } from './CirclePostForUser'
import { Raleway600SemiBoldText } from '../Text/TextComponents';
import svgIcons from '@/src/assets/icons/svgIcons';
import SearchBar from '../SearchBar';
import { colorsStyles } from '@/src/styles/styles';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Router } from 'expo-router';

interface UserPanelProps {
    name?: string;
    router: Router;
}

const UserPanel: React.FC<UserPanelProps> = (props) => {
    function navigateToLoginScreen() {
        props.router.push({
            pathname: '/(auth)/login',
        })
    }

    function renderCircleStory({ item }: { item: CircleStoryProps }) {
        return (
            <CirclePostForUser
                imgSrc={item.imgSrc}
            />
        )
    }
    const circleStoriesData: CircleStoryProps[] = [
        { imgSrc: '1' },
        { imgSrc: '1' },
        { imgSrc: '1' },
        { imgSrc: '1' },
        { imgSrc: '1' },
    ]

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: colorsStyles.mainDarkColor.color, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>{/*Здесь будет картинка*/}
                <View style={styles.nameAndButtons}>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={navigateToLoginScreen}>
                        <Raleway600SemiBoldText
                            text='Имя пользователя'
                        />
                    </TouchableOpacity>

                    <View style={styles.buttons}>
                        <svgIcons.NotificationsIcon stroke={'black'} />
                        <svgIcons.ProfileSettingsIcon stroke={'black'} />
                    </View>

                </View>
                <View style={{ marginVertical: 32, marginHorizontal: 16 }}>
                    <SearchBar contentStyle={{ backgroundColor: colorsStyles.mainWhiteColor.color }} />
                </View>
            </View>
            <View style={{ marginVertical: 16 }}>
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
    },

    nameAndButtons: {
        marginHorizontal: 16,
        marginTop: Constants.statusBarHeight,
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