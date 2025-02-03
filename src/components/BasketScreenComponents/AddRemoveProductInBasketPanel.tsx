import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { RemoveOneProductFromBasket } from '../Buttons/ButtonComponents';
import { AddOneProductInBasket } from '../Buttons/ButtonComponents';
import { Product } from '@/src/interfaces/Product';
import { RegularText } from '../Text/TextComponents';

interface AddRemoveProductInBasketPanelProps {
    style?: ViewStyle[]
    product: Product,
    onRemove: () => void,
    onAdd: () => void,
}

const AddRemoveProductInBasketPanel: React.FC<AddRemoveProductInBasketPanelProps> = React.memo((props) => {
    return (
        <View style={[styles.container, props.style]}>

            <RemoveOneProductFromBasket
                style={styles.removeButton}
                product={props.product}
                onRemove={props.onRemove}
            />

            <View style={styles.amountInBasket}>
                <RegularText
                    style={{ color: '#fff' }}
                    text={props.product.amountInBasket.toString()}
                />
            </View>

            <AddOneProductInBasket
                style={styles.addButton}
                product={props.product}
                onAdd={props.onAdd}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: 'green',
    },
    removeButton: {
        flex: 1,
        alignItems: 'center',
    },
    amountInBasket: {
        flex: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        height: '100%',
    },
    addButton: {
        flex: 1,
        alignItems: 'center',
    },
});

export default AddRemoveProductInBasketPanel;