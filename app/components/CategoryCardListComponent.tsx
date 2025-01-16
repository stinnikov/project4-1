
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, } from 'react-native';
import { Category } from '../interfaces/Category';
import { Router, useRouter } from 'expo-router';
import commonStyles from '../styles/commonStyles';
import CardComponent from './CardComponent';

interface CategoryCardListProps {
    data: Category[];
    isMainScreen:boolean;
    router: Router;
}
const ipv4 = 'http://192.168.0.87:5055';

function ListHeader(){
    return(
        <Text style={styles.listTitle}>Категории</Text>
    )
}

function renderCategory({ item, router }: { item: Category, router: Router }) {
    return(
        <CardComponent 
            item={item}
            router={router} 
            titleText={item.name}
            textStyle={{color:'white'}}
            imageUri={`${ipv4}/getImageByCategoryId?categoryId=${item.id}`}
            style={{height: commonStyles.categoryCard.height, width:commonStyles.categoryCard.width}}
            />
    )
}


const CategoryCardListComponent: React.FC<CategoryCardListProps> = (props) => {
    return (
        <View style={styles.container}>          
            <FlatList style={styles.list}
                data={props.data}
                renderItem={({item}) => renderCategory({item: item, router: props.router})}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeader}
                columnWrapperStyle={styles.column}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list:{
    },

    listTitle:{
        fontSize: commonStyles.listTitle.fontSize,
        fontWeight: commonStyles.listTitle.fontWeight,
        fontFamily: commonStyles.text.fontFamily,
        marginBottom: commonStyles.listTitle.margin,
    },

    column: {
        gap: commonStyles.categoryCard.gap,
        marginBottom: commonStyles.categoryCard.gap,
    },
});

export default CategoryCardListComponent;
