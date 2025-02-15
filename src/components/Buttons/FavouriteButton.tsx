import React from "react";
import { ViewStyle, TouchableOpacity, ColorValue } from "react-native";
import Product from "@/src/interfaces/Product";
import { colorsStyles } from "@/src/styles/styles";
import { buttonStyles } from "@/src/styles/styles";
import svgIcons from "@/src/assets/icons/svgIcons";
import useProductStore from "@/src/store/productsStore";

interface FavouriteButtonProps {
    product: Product,
    style?: ViewStyle,
}

export const FavouriteButton: React.FC<FavouriteButtonProps> = React.memo(({ product, style }) => {
    const { addFavourite, removeFavourite, favourites } = useProductStore();

    const isFavourite = favourites.some(fav => fav.id === product.id);
    const color: ColorValue = isFavourite ? colorsStyles.mainBrightColor.color : '#000';

    const handleFavouriteButton = async () => {
        if (isFavourite) {
            await removeFavourite(product.id);
        } else {
            await addFavourite(product.id);
        }
    }

    return (
        <TouchableOpacity style={[buttonStyles.miniButton, style]} onPress={handleFavouriteButton}>
            <svgIcons.FavoritesIcon width={21} height={21} fill={color === '#000' ? 'none' : color} stroke={color}></svgIcons.FavoritesIcon>
        </TouchableOpacity>
    );
});

export default React.memo(FavouriteButton);
