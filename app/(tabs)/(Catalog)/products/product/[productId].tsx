import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams } from 'expo-router';
import { products } from '@/app/data/products';
import ProductCard from '@/app/components/ProductCard';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function(){

    const { productId } = useLocalSearchParams();
    
    const productByCategory = products.find(i => i.id == productId);

    if(productByCategory == undefined)
    {
        return(
            <Text>это заглушка для пустого продукта</Text>
        )
    }

    const imgURL = 'https://khakaskosmetika.ru/upload/resize_cache/iblock/50a/450_450_140cd750bba9870f18aada2478b24840a/bnma1gkd2vn9flr535qed1xz93rcdegv.jpg';

    return( 
        <View style={styles.container}>

            <View style={styles.productCard}>
            <ProductCard product={productByCategory} visible={true} imageUrl={imgURL}></ProductCard>
            </View>

            <View style={styles.bottomButtonsPanel}>

                <TouchableOpacity style={styles.button1} onPress={() => {}}>
                    <Text style={{color:'white', zIndex:999, position:'absolute'}}>Добавить в корзину</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={() =>{}}>
                    <Icon name="heart" size={20} style={{zIndex:999, position:'absolute'}} color="white" />
                </TouchableOpacity>

            </View>
        </View>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottomButtonsPanel:{
        flex:1,
        padding:15,
        backgroundColor:'white',
        flexDirection:'row',
        zIndex:-1,
    },
    productCard:{
        flex:15,
    },
    button1: {
        flex:6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 5,
    },

    button2: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 20,
        marginLeft:5,
        borderRadius: 5,
    },

    buttonText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 16,
    },

})