import React from 'react';
import { ViewStyle, View, TouchableOpacity, StyleSheet } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles } from '@/src/styles/styles';
import { Product } from '@/src/interfaces/Product';
import { Montserrat400RegularText } from '../Text/TextComponents';
import useBasketStore from '@/src/store/basketStore';

interface BasketProductInfoPanelProps {
    product: Product,
    style?: ViewStyle,
}

export const BasketProductInfoPanel: React.FC<BasketProductInfoPanelProps> = React.memo(({ product, style }) => {
    const { products, addProduct, removeProduct } = useBasketStore();
    const amount = products.find(p => p.id === product.id)?.amountInBasket || 0;

    const handleRemove = () => {
        removeProduct(product);
    };

    const handleAdd = () => {
        addProduct(product);
    };

    //TODO : анимация с "вернуть" как в ВВ
    return (
        <View style={[styles.panel, style]}>
            <View style={styles.panelContent}>
                <TouchableOpacity
                    style={styles.controlButton}
                    onPress={handleRemove}
                >
                    <svgIcons.MinusIcon stroke={'#000'} width={16} height={16} />
                </TouchableOpacity>

                <View style={styles.amountDisplay}>
                    <Montserrat400RegularText
                        style={styles.amountText}
                        text={`${amount} шт`} // Предположим, что у продукта есть цена
                    />
                </View>

                <TouchableOpacity
                    style={styles.controlButton}
                    onPress={handleAdd}
                >
                    <svgIcons.PlusIcon stroke={'#000'} width={16} height={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    panel: {
        backgroundColor: colorsStyles.mainLightGreyColor.color,
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    panelContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    controlButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '33%',
        alignItems: 'center',
    },
    amountDisplay: {
        flexDirection: 'row',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 10,
    },
});

export default BasketProductInfoPanel;