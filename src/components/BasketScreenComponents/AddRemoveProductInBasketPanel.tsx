import React from 'react';
import { View, ViewStyle, StyleSheet, Text } from 'react-native';
import { RemoveOneProductFromBasket } from '../Buttons/ButtonComponents';
import { AddOneProductInBasket } from '../Buttons/ButtonComponents';
import { Product } from '@/src/interfaces/Product';

interface AddRemoveProductInBasketPanelProps {
    style?: ViewStyle
    product: Product,
    onRemove: () => void,
    onAdd: () => void,
}

const AddRemoveProductInBasketPanelComponent: React.FC<AddRemoveProductInBasketPanelProps> = React.memo((props) => {
    return (
        <View style={[styles.container, props.style]}>
            <RemoveOneProductFromBasket product={props.product} onRemove={props.onRemove} style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, }} />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>{props.product.amountInBasket}</Text>
            </View>
            <AddOneProductInBasket product={props.product} onAdd={props.onAdd} style={{ flex: 1, alignItems: 'center', borderLeftWidth: 1 }} />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AddRemoveProductInBasketPanelComponent;