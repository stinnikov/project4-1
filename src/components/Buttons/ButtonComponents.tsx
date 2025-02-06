import React, { useState } from 'react';
import { TouchableOpacity, Pressable, ViewStyle, Text, View, StyleSheet, TextStyle, ColorValue } from 'react-native';
import svgIcons from '@/src/assets/icons/svgIcons';
import { colorsStyles, buttonStyles } from '@/src/styles/styles';
import { Router } from 'expo-router';
import { Product } from '@/src/interfaces/Product';
import { addFavoriteProductAsync, deleteFavoriteProductAsync } from '@/src/services/ProductService';
import { addProductInBasketAsync, clearBasketByUserId, deleteProductFromBasket } from '@/src/services/BasketService';
import { Montserrat600SemiBoldText, Montserrat400RegularText, Montserrat300LightText, Montserrat500MediumText } from '../Text/TextComponents';



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

interface AddButtonProps {
    product: Product;
    style?: ViewStyle | ViewStyle[];
    iconColor?: ColorValue;
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
            <svgIcons.PlusIcon stroke={props.iconColor ?? '#fff'}></svgIcons.PlusIcon>
        </TouchableOpacity>
    )
})

interface RemoveButtonProps {
    product: Product;
    style?: ViewStyle | ViewStyle[];
    iconColor?: ColorValue;
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
            <svgIcons.MinusIcon stroke={props.iconColor ?? '#fff'}></svgIcons.MinusIcon>
        </TouchableOpacity>
    )
})


interface AddRemoveProductInBasketPanelProps {
    style?: ViewStyle[] | ViewStyle,
    textStyle?: TextStyle,
    removeButtonStyle?: ViewStyle,
    iconsColor?: ColorValue,
    addButtonStyle?: ViewStyle,
    product: Product,
    onRemove: () => void,
    onAdd: () => void,
}

const AddRemoveProductInBasketPanel: React.FC<AddRemoveProductInBasketPanelProps> = React.memo((props) => {
    let totalPriceTextColor: ColorValue = '';

    if (props.textStyle) {
        if (props.textStyle.color) {
            if (props.textStyle.color === colorsStyles.mainWhiteColor.color || props.textStyle.color === '#fff') {
                totalPriceTextColor = colorsStyles.mainWhiteColor.color;
            }
            else {
                totalPriceTextColor = colorsStyles.mainDarkGreyColor.color;
            }
        }
        else {
            totalPriceTextColor = colorsStyles.mainWhiteColor.color;
        }
    }
    else {
        totalPriceTextColor = colorsStyles.mainWhiteColor.color;
    }

    return (
        <View style={[addRemoveProductInBasketStyles.container, props.style]}>

            <RemoveOneProductFromBasket
                style={[addRemoveProductInBasketStyles.removeButton, props.removeButtonStyle || {}]}
                product={props.product}
                iconColor={props.iconsColor ?? colorsStyles.mainWhiteColor.color}
                onRemove={props.onRemove}
            />

            <View style={addRemoveProductInBasketStyles.amountInBasket}>
                <Montserrat500MediumText
                    style={props.textStyle || { color: colorsStyles.mainWhiteColor.color }}
                    text={props.product.amountInBasket.toString() + ' шт'}
                />
                <Montserrat400RegularText
                    style={[props.textStyle || {}, { color: totalPriceTextColor, fontSize: 10 }]}
                    text={'200₽'}
                />
            </View>

            <AddOneProductInBasket
                style={[addRemoveProductInBasketStyles.removeButton, props.addButtonStyle || {}]}
                product={props.product}
                iconColor={props.iconsColor ?? colorsStyles.mainWhiteColor.color}
                onAdd={props.onAdd}
            />
        </View>
    )
})

const addRemoveProductInBasketStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    removeButton: {
        flex: 1,
        alignItems: 'center',
    },
    amountInBasket: {
        flex: 1.3,
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
    textStyle?: TextStyle,
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
        if (props.size === 'big') {
            return (
                <AddRemoveProductInBasketPanel
                    style={[buttonStyles.basketButton, props.style || {}]}
                    textStyle={{ fontSize: 20 }}
                    product={props.product}
                    onAdd={addOneProduct} onRemove={removeOneProduct} />
            )
        }
        return (
            <AddRemoveProductInBasketPanel
                style={[buttonStyles.basketButton, props.style || {}]}
                product={props.product}
                onAdd={addOneProduct} onRemove={removeOneProduct} />
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
                    style={[props.textStyle || {}, { color: colorsStyles.mainWhiteColor.color }]}
                    text='В корзину'
                />
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={handlePressBasketButton} style={[buttonStyles.basketButton, props.style]}>
            <svgIcons.BasketIcon stroke={colorsStyles.mainWhiteColor.color}></svgIcons.BasketIcon>
            <Montserrat400RegularText
                style={[props.textStyle || {}, { color: colorsStyles.mainWhiteColor.color, fontSize: 14 }]}
                text='В корзину'
            />
        </TouchableOpacity>
    )
})

interface BasketProductInfoPanelProps {
    product: Product,
    style?: ViewStyle,
}

export const BasketProductInfoPanel: React.FC<BasketProductInfoPanelProps> = React.memo((props) => {
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

    //TODO : анимация с "вернуть" как в ВВ
    return (
        <AddRemoveProductInBasketPanel
            product={props.product}
            style={[buttonStyles.basketButton, { backgroundColor: colorsStyles.mainLightGreyColor.color }, props.style || {}]}
            textStyle={{ color: colorsStyles.mainBlackColor.color, fontSize: 10 }}
            iconsColor={colorsStyles.mainBlackColor.color}
            onAdd={addOneProduct} onRemove={removeOneProduct}
        />
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