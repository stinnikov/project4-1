// ProductCard.tsx
import React from 'react';
import { View, Text, Image, Button, Modal, StyleSheet } from 'react-native';
import { Product } from '../interfaces/Product'

interface ProductCardProps {
    product: Product;
    visible: boolean;
    onClose: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, visible, onClose }) => {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.card}>
                <Image source={{ uri: product.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>Price: {product.price} {product.unit}</Text>
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default ProductCard;
