import { addFavoriteProductAsync } from "@/src/services/ProductService";

export async function handleFavouriteButtonAsync(prodId: string) {
    try {
        const response = await addFavoriteProductAsync(prodId);
        return response;
    }
    catch (e) {

    }
}

export default { handleFavouriteButtonAsync }