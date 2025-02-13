import React from "react";
import { View } from "react-native";
import ProductCard from "../ProductCard";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import ProductList from "../ProductList";

interface FavouritesProductListProps {
    products: Product[],
}

const FavouritesProductList: React.FC<FavouritesProductListProps> = (props) => {
    return (
        <ProductList
            products={props.products}
            parentTab="favourites"
        />
    )
}

export default FavouritesProductList