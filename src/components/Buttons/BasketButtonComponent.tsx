import React from "react";
import { ViewStyle, View, TouchableOpacity, StyleSheet } from "react-native";
import svgIcons from "@/src/assets/icons/svgIcons";
import { Montserrat400RegularText } from "../Text/TextComponents";
import { colorsStyles } from "@/src/styles/styles";
import useBasketStore from "@/src/store/basketStore";
import Product from "@/src/interfaces/Product";

interface BasketButtonComponentProps {
    product: Product;
    style?: ViewStyle;
}

export const BasketButtonComponent: React.FC<BasketButtonComponentProps> = React.memo(({ product, style }) => {
    const { products, addProduct, removeProduct } = useBasketStore();
    const amount = products.find(p => p.id === product.id)?.amountInBasket || 0;

    const renderBasketButton = () => {
        const handlePressBasketButton = () => {
            addProduct(product);
        }
        return (
            <TouchableOpacity
                style={[styles.button, style]}
                onPress={handlePressBasketButton}
            >
                <svgIcons.BasketIcon width={16} height={16} />
                <Montserrat400RegularText
                    style={styles.buttonText}
                    text="В корзину" />
            </TouchableOpacity>
        );
    };

    const renderAddRemovePanel = () => {
        const handleRemove = () => {
            removeProduct(product);
        };

        const handleAdd = () => {
            addProduct(product);
        };

        return (
            <View style={[styles.panel, style]}>
                <View style={styles.panelContent}>
                    <TouchableOpacity
                        style={styles.controlButton}
                        onPress={handleRemove}
                    >
                        <svgIcons.MinusIcon stroke={'#fff'} width={16} height={16} />
                    </TouchableOpacity>

                    <View style={styles.amountDisplay}>
                        <Montserrat400RegularText
                            style={styles.amountText}
                            text={`${amount} шт`}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.controlButton}
                        onPress={handleAdd}
                    >
                        <svgIcons.PlusIcon stroke={colorsStyles.mainWhiteColor.color} width={16} height={16} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        amount > 0 ? renderAddRemovePanel() : renderBasketButton()
    );
});

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        backgroundColor: colorsStyles.mainBrightColor.color,
        borderRadius: 12,
        paddingVertical: 8,
    },
    buttonText: {
        color: colorsStyles.mainWhiteColor.color,
        fontSize: 14,
    },
    panel: {
        backgroundColor: colorsStyles.mainBrightColor.color,
        borderRadius: 12,
        paddingVertical: 8,
    },
    panelContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    controlButton: {
        justifyContent: 'center',
        width: '33%',
        alignItems: 'center',
    },
    amountDisplay: {
        flexDirection: 'row',
        gap: 2,
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amountText: {
        color: colorsStyles.mainWhiteColor.color,
        fontSize: 10,
    },
});

export default React.memo(BasketButtonComponent);
