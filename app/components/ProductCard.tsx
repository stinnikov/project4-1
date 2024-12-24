// ProductCard.tsx
import React, {useState, useEffect} from 'react';
import { View, Text, Image, Button, Modal, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Product } from '../interfaces/Product'
import ProductDescription from './markup/productDescription';
import Line from './markup/line';

interface ProductCardProps {
    product: Product;
    visible: boolean;
    imageUrl?: string;
}


let imageWidth: number = 0;
let imageHeight: number = 0;


const ProductCard: React.FC<ProductCardProps> = ({ product, imageUrl }) => {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    if(imageUrl)
    useEffect(() => {
    // Получаем ширину и высоту изображения
        Image.getSize(
            imageUrl,
            (width, height) => {
        setImageSize({ width, height });
      },
      (error) => {
        console.error('Ошибка при получении размера изображения:', error);
      }
    );
  }, [imageUrl]);

    imageHeight = imageSize.height;
    imageWidth = imageSize.width;
    const imageStyle = () => {
        return {
                width: imageWidth, // Ширина изображения
                height: imageHeight, // Высота изображения
        }
    }

    return (
            <ScrollView contentContainerStyle={styles.card}>

                <View style={styles.title}>
                    <Text style={styles.titlePR}>{product.name}</Text>
                </View>

                <Line></Line>

                <View>
                    <Image source={{ uri: imageUrl }} style={imageStyle()} />
                </View>

                <Line></Line>

                <View style={styles.price}>
                    <Text style={styles.pricePR}>{product.price} ₽ / {product.unit}</Text>
                </View>

                <Line></Line>

                <View style={styles.description}>
                    <ProductDescription></ProductDescription>
                </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        alignItems:'center',
      },
    container:{
        flex:1,
    },
    title:{
        alignItems: 'flex-start',
        padding: 20,
    },
    price:
    {
        flex:1,
        marginLeft:20,
        padding:20,
    },
    description:
    {
        justifyContent:'flex-end',
        alignItems: 'center',
        elevation: 5, // Для Android, чтобы добавить тень
        boxShadow: '#000', // Для iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    titlePR: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    descriptionPR: {
        fontSize: 16,
        marginBottom: 10,
    },
    pricePR: {
        fontSize: 24,
    },
    button: {
        padding: 10,
    },
    buttonText: {
     fontSize: 16,
    },
});

export default ProductCard;
