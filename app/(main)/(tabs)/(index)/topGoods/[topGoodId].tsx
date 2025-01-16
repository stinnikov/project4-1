import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '@/app/interfaces/Product';
import ProductCardComponent from '@/app/components/ProductCardComponent';
import { useState,useEffect } from 'react';
import { getSingleProductById } from '@/app/services/ProductService';

export default function(){
    

    const { topGoodId } = useLocalSearchParams();

    const [Product,setProduct] = useState<Product>({"id": "",
        "name": "",
        "price": '',
        "description": "",
        "imageUrl": ""});
        useEffect(()=>{
            const getEntries = async()=>{
                let prod:Product;
                
                if(typeof(topGoodId)=="string")
                {
                    var temp= await getSingleProductById(topGoodId)
                    if(temp!==undefined)
                    {
                        prod = temp;
                        setProduct(prod);
                    }
                }
            }
            getEntries();
        },[])
        const router = useRouter();

    


    return( 
        <View style={styles.container}>
            <ProductCardComponent data={Product as Product} router={router} ></ProductCardComponent>
        </View>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})