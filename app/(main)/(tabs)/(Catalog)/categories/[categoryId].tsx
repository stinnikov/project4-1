"use client"
import { useLocalSearchParams, usePathname, Stack, useRouter, SplashScreen} from 'expo-router';
import { categories } from '@/app/data/categories';
import { products } from '@/app/data/products';
import CategoryListScreen from '@/app/screens/CategoryListScreen';
import { Category } from '@/app/interfaces/Category';
import { useState,useEffect } from 'react';
import { getCategoriesById, getCategoryNameById, getCategoryById } from '@/app/services/CategoryService';
import { getProductsByCategoryId } from '@/app/services/ProductService';
import ProductList from '../products/[productList]';
import { Product } from '@/app/interfaces/Product';
import ProductListScreen from '@/app/screens/ProductListScreen';

export default function(){
    const router = useRouter();
    const { categoryId, categoryDepth } = useLocalSearchParams();
    const[Products, setProducts] = useState<any>(undefined);
    const [Categories,setCategories] = useState<any>(undefined);

    useEffect(()=>{
        const getEntries = async()=>{
            let cats:Category[]=[];
            if(typeof(categoryId)=="string")
            {
                var temp= await getCategoriesById(categoryId)
                if(temp!==undefined)
                {
                    cats = temp;
                    setCategories(cats);
                }

            }
            
        }
        getEntries();
    },[]);
    
    useEffect(()=>{
        const getEntries = async()=>{
            let prods:Product[] =[];
            if(typeof(categoryId)=="string")
            {
                var temp = await getProductsByCategoryId(categoryId)
                if(temp!==undefined)
                {
                    prods = temp;
                    setProducts(prods);
                }
            }
        }
        getEntries();
    },[])
    
    const [currentCategory, setCategory] = useState<Category>();

    useEffect(()=>{
        async function getEntries(){
            let cat:Category;
            if(typeof(categoryId)=="string")
            {
                var temp= await getCategoryById(categoryId)
                if(temp!==undefined)
                {
                    cat = temp;
                    setCategory(cat);
                }

            }
            
        }
        getEntries();
    },[]);

    const topGoodsData = products.slice(0,20);
    if(currentCategory && Categories)
    {
        if(Categories.length === 0 && Products)
        {
            return(
                <ProductListScreen 
                    data={Products}
                    categoryName={currentCategory.name}
                    router={router}
                />
            )
        }
        return(
            <CategoryListScreen  
                currentCategory={currentCategory}
                data={Categories}
                topGoodsData={topGoodsData}
                router={router}
            />
        )
    }
    else
    {
        SplashScreen.hide();
    }
}