import React, { useState } from 'react';
import { TouchableOpacity, Pressable, ViewStyle, Text, View, StyleSheet } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles, buttonStyles } from '@/src/styles/styles';
import { Router } from 'expo-router';
import { Product } from '@/src/interfaces/Product';
import { addFavoriteProductAsync, deleteFavoriteProductAsync } from '@/src/services/ProductService';
import { addProductInBasketAsync, clearBasketByUserId, deleteProductFromBasket } from '@/src/services/BasketService';
import { Montserrat600SemiBoldText, Montserrat400RegularText } from '../Text/TextComponents';



interface FavouriteButtonProps {
    product: Product,
    style?: ViewStyle,
}

export const FavouriteButtonComponent: React.FC<FavouriteButtonProps> = React.memo((props) => {
    const product = props.product;
    const [color, setColor] = useState<string>(product.isFavourite ? colorsStyles.mainBrightColor.color.toString() : 'none')

    function handlePressFavouriteButton() {
        if (product.isFavourite === true) {
            deleteFavoriteProductAsync(product.id);
            setColor('none');
            product.isFavourite = false;
        }
        else {
            addFavoriteProductAsync(product.id);
            setColor(colorsStyles.mainBrightColor.color.toString())
            product.isFavourite = true;
        }
    }

    return (
        <TouchableOpacity style={[buttonStyles.miniButton, props.style]}
            onPress={handlePressFavouriteButton}>
            <svgIcons.FavoritesIcon width={21} height={21} fill={color} stroke={product.isFavourite ? colorsStyles.mainBrightColor.color : '#000'}></svgIcons.FavoritesIcon>
        </TouchableOpacity>
    )
})

interface BackButtonComponentProps {
    router: Router,
    style?: ViewStyle,
}

export const BackButtonComponent: React.FC<BackButtonComponentProps> = React.memo((props) => {
    function handlePressBackButton() {
        props.router.canGoBack() && props.router.back();
    }

    return (
        <Pressable style={[buttonStyles.miniButton, props.style]}
            onPress={handlePressBackButton}>
            <svgIcons.BackArrowIcon width={20} height={20}></svgIcons.BackArrowIcon>
        </Pressable>
    )
})

interface AddRemoveProductInBasketPanelProps {
    style?: ViewStyle[]
    product: Product,
    onRemove: () => void,
    onAdd: () => void,
}

const AddRemoveProductInBasketPanel: React.FC<AddRemoveProductInBasketPanelProps> = React.memo((props) => {
    return (
        <View style={[addRemoveProductInBasketStyles.container, props.style]}>

            <RemoveOneProductFromBasket
                style={addRemoveProductInBasketStyles.removeButton}
                product={props.product}
                onRemove={props.onRemove}
            />

            <View style={addRemoveProductInBasketStyles.amountInBasket}>
                <Montserrat400RegularText
                    style={{ color: '#fff' }}
                    text={props.product.amountInBasket.toString()}
                />
            </View>

            <AddOneProductInBasket
                style={addRemoveProductInBasketStyles.addButton}
                product={props.product}
                onAdd={props.onAdd}
            />
        </View>
    )
})

const addRemoveProductInBasketStyles = StyleSheet.create({
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

interface BasketButtonComponentProps {
    product: Product,
    style?: ViewStyle,
    size?: 'mini' | 'medium' | 'big'
}

export const BasketButtonComponent: React.FC<BasketButtonComponentProps> = React.memo((props) => {
    const [amountInBasket, setAmountInBasket] = useState<number>(props.product.amountInBasket);

    function addOneProduct() {
        setAmountInBasket(prevAmount => prevAmount + 1);
        props.product.amountInBasket++;
    }

    function removeOneProduct() {
        if (amountInBasket - 1 >= 0) {
            setAmountInBasket(prevAmount => prevAmount - 1);
            props.product.amountInBasket--;
        }
    }

    function handlePressBasketButton() {
        addProductInBasketAsync(props.product.id).then(() => {
            addOneProduct();
        });
    }

    if (props.product.amountInBasket > 0) {
        if (props.style)
            return (
                <AddRemoveProductInBasketPanel style={[buttonStyles.basketButton, props.style]} product={props.product} onAdd={addOneProduct} onRemove={removeOneProduct} />
            )

        return (
            <AddRemoveProductInBasketPanel product={props.product} onAdd={addOneProduct} onRemove={removeOneProduct} />
        )
    }

    if (props.size === 'big') {
        return (
            <TouchableOpacity onPress={handlePressBasketButton} style={[buttonStyles.basketButton, props.style]}>
                <svgIcons.BasketIcon
                    width={22} height={22}
                    stroke={colorsStyles.mainWhiteColor.color}
                    strokeWidth={1.5}
                />
                <Montserrat600SemiBoldText
                    style={{ color: 'white' }}
                    text='В корзину'
                />
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={handlePressBasketButton} style={[buttonStyles.basketButton, props.style]}>
            <svgIcons.BasketIcon stroke={colorsStyles.mainWhiteColor.color}></svgIcons.BasketIcon>
            <Montserrat400RegularText
                style={{ color: 'white', fontSize: 14 }}
                text='В корзину'
            />
        </TouchableOpacity>
    )
})

interface RemoveButtonProps {
    product: Product;
    style?: ViewStyle;
    onRemove: () => void;
}

export const RemoveOneProductFromBasket: React.FC<RemoveButtonProps> = React.memo((props) => {
    function handlePressRemoveOneProductFromBasket() {
        deleteProductFromBasket(props.product.id)
            .then(() => {
                props.onRemove();
            })
            .catch((error) => {
                console.error('Ошибка при удалении продукта:', error);
            });
    }

    return (
        <TouchableOpacity onPress={handlePressRemoveOneProductFromBasket} style={props.style}>
            <svgIcons.MinusIcon stroke={'#fff'}></svgIcons.MinusIcon>
        </TouchableOpacity>
    )
})

interface AddButtonProps {
    product: Product;
    style?: ViewStyle;
    onAdd: () => void; // Добавляем пропс для обновления состояния
}

export const AddOneProductInBasket: React.FC<AddButtonProps> = React.memo((props) => {
    function handlePressAddOneProductInBasket() {

        addProductInBasketAsync(props.product.id)
            .then(() => {
                // Вызываем функцию для обновления состояния родительского компонента
                props.onAdd();
            })
            .catch((error) => {
                console.error('Ошибка при удалении продукта:', error);
            });
    }

    return (
        <TouchableOpacity onPress={handlePressAddOneProductInBasket} style={props.style}>
            <svgIcons.PlusIcon stroke={'#fff'}></svgIcons.PlusIcon>
        </TouchableOpacity>
    )
})

interface ClearBasketButtonProps {
    style?: ViewStyle;
    onClear: () => void;
}
export const ClearBasketButton: React.FC<ClearBasketButtonProps> = React.memo((props) => {
    function handlePressClearBasketButton() {
        clearBasketByUserId()
            .then(() => props.onClear())
            .catch((error) => {
                console.error('Ошибка при попытке очистить корзину:', error);
            });;
    }

    return (
        <TouchableOpacity onPress={handlePressClearBasketButton} style={[props.style]}>
            <Text style={{ fontSize: 12, fontFamily: 'Montserrat_400Regular' }}>Очистить корзину </Text>
            <svgIcons.TrashCanIcon></svgIcons.TrashCanIcon>
        </TouchableOpacity>
    )
})

export default {}