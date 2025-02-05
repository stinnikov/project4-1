import React from "react";
import { View } from "react-native";
import ProductCard from "../ProductCard";
import { Product } from "@/src/interfaces/Product";
import { Router } from "expo-router";
import ProductList from "../ProductList";

interface FavouritesProductListProps {
    products: Product[],
    router: Router,
}

const FavouritesProductList: React.FC<FavouritesProductListProps> = (props) => {
    return (
        <ProductList
            data={props.products}
            router={props.router}
            parentTab='favourites'
        />
    )
}

export default FavouritesProductList