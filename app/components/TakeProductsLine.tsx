import React from "react"
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { Router } from "expo-router"
import { productStyles } from "../styles/productStyles"

interface TakeProductsLineProps{
    router: Router,
    categoryId: string,
}

const TakeProductsLine: React.FC<TakeProductsLineProps> = ({categoryId, router}) => {
    return(
        console.log(categoryId),
        <TouchableOpacity onPress={() => { router.push( {
            pathname: "../products/productList?categoryId=[categoryId]",
            params: { 
                categoryId: categoryId,
            },
          }  )}} style={productStyles.product}>
            <Text style={styles.lineName}>Взять все продукты категории</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        lineName:{
            fontSize: 18,
        }
    }
)

export default TakeProductsLine;