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

const BottomTab = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomTab}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Кнопка 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Кнопка 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Кнопка 3</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

const ProductCard: React.FC<ProductCardProps> = ({ product, visible, imageUrl }) => {
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
                borderRadius: 20, // Закругляем углы
                borderWidth: 0, // Ширина обводки
                borderColor: '#fff', // Цвет обводки
                shadowColor: '#000', // Цвет тени
                shadowOpacity: 0.5, // Прозрачность тени
                shadowRadius: 3, // Радиус размытия тени
                elevation: 5, // Эффект тени для Android
        }
    }

    return (
            <ScrollView contentContainerStyle={styles.card}>

                <View style={styles.title}>
                    <Text style={styles.titlePR}>{product.name}</Text>
                </View>

                <Line></Line>

                <View style={imageStyle()}>
                    <Image source={{ uri: 'https://khakaskosmetika.ru/upload/resize_cache/iblock/37d/450_450_140cd750bba9870f18aada2478b24840a/bdvh27sfg152dtk98fbxnlxickexwcb3.jpg' }} style={imageStyle()} />
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
        borderRadius: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
        overflow: 'hidden',
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
        shadowColor: '#000', // Для iOS
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
    bottomTab: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 5, // Для Android, чтобы добавить тень
        shadowColor: '#000', // Для iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
});

export default ProductCard;
