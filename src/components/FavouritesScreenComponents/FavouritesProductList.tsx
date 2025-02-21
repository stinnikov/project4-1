import React from "react";
import { Product } from "@/src/interfaces/Product";
import ProductList from "../ProductComponents/ProductList";

interface FavouritesProductListProps {
    favourites: Product[];
}

const FavouritesProductList: React.FC<FavouritesProductListProps> = (props) => {
    return (
        <ProductList
            products={props.favourites}
            parentTab="favourites"
        />
    )
}

export default FavouritesProductList