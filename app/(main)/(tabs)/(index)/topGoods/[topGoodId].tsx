import { useLocalSearchParams, usePathname, Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '@/app/interfaces/Product';
import ProductCardComponent from '@/app/components/ProductCardComponent';
import { useState,useEffect } from 'react';
import { getSingleProductById } from '@/app/services/ProductService';

export default function(){
    

    const { topGoodId } = useLocalSearchParams();

    const [Product,setProduct] = useState<Product>({"id": "60470940-b9fe-11ea-80c9-002590bc5b5f",
        "name": "Professional Estel XTRO EX/NY Пигмент прямого действия для волос Желтый 100мл ",
        "price": 510,
        "unit": "штука",
        "description": "Описание отсутствует",
        "imageUrl": "https://api.hk19.ru/goods_photos/115%C2%A0124.jpg",
        "categoryIds": [
          "72a9eeff-080b-444d-bb47-569470455e98",
          "24510936-8140-43e3-87d5-a0b87d066aee",
          "057e0e57-768e-407b-afb7-91f23d180571"
        ]});
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